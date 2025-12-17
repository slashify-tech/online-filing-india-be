import { Request, Response } from 'express';
import { MongoDBService } from '../service/mongodb.service';
import { OTPService } from '../service/otp.service';
import { JWTService } from '../service/jwt.service';
import logger from '../utils/logger';
import { UserDocument, SignupRequest, SigninRequest, SendOTPRequest, OTPVerificationRequest } from '../types/user.types';

export class AuthController {
    private mongoDBService: MongoDBService;
    private otpService: OTPService;
    private jwtService: JWTService;
    private userCollection = 'users';

    constructor() {
        this.mongoDBService = new MongoDBService();
        this.otpService = new OTPService();
        this.jwtService = new JWTService();
    }

    /**
     * Send OTP for signup or signin
     * POST /api/auth/send-otp
     */
    async sendOTP(req: Request, res: Response): Promise<void> {
        try {
            const { identifier, type }: SendOTPRequest = req.body;

            if (!identifier || !type) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'identifier and type are required',
                });
                return;
            }

            if (type !== 'email' && type !== 'contact') {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'type must be either "email" or "contact"',
                });
                return;
            }

            // Validate email format if type is email
            if (type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(identifier)) {
                    res.status(400).json({
                        error: 'Bad Request',
                        message: 'Invalid email format',
                    });
                    return;
                }
            }

            // Validate contact format (10 digits)
            if (type === 'contact') {
                const contactRegex = /^[0-9]{10}$/;
                if (!contactRegex.test(identifier)) {
                    res.status(400).json({
                        error: 'Bad Request',
                        message: 'Invalid contact format. Must be 10 digits',
                    });
                    return;
                }
            }

            await this.otpService.generateAndStoreOTP(identifier, type);

            res.json({
                message: `OTP sent successfully to ${type}`,
                data: {
                    identifier,
                    type,
                },
            });
        } catch (error: any) {
            logger.error('Error in sendOTP', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    /**
     * Signup with OTP verification
     * POST /api/auth/signup
     */
    async signup(req: Request, res: Response): Promise<void> {
        try {
            const { username, email, contact, emailOTP, contactOTP }: SignupRequest = req.body;

            // Contact is required
            if (!contact) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'contact is required',
                });
                return;
            }

            // Contact OTP is required
            if (!contactOTP) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'contactOTP is required',
                });
                return;
            }

            // Validate contact format
            const contactRegex = /^[0-9]{10}$/;
            if (!contactRegex.test(contact)) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'Invalid contact format. Must be 10 digits',
                });
                return;
            }

            // Validate email format if provided
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    res.status(400).json({
                        error: 'Bad Request',
                        message: 'Invalid email format',
                    });
                    return;
                }
            }

            // Check if user already exists by contact
            const existingUserByContact = await this.mongoDBService.findOne<UserDocument>(
                this.userCollection,
                { contact } as any
            );

            if (existingUserByContact) {
                res.status(409).json({
                    error: 'Conflict',
                    message: 'User with this contact already exists',
                });
                return;
            }

            // Check if user already exists by email (if provided)
            if (email) {
                const existingUserByEmail = await this.mongoDBService.findOne<UserDocument>(
                    this.userCollection,
                    { email } as any
                );

                if (existingUserByEmail) {
                    res.status(409).json({
                        error: 'Conflict',
                        message: 'User with this email already exists',
                    });
                    return;
                }
            }

            // Check if username is already taken (if provided)
            if (username) {
                const existingUserByUsername = await this.mongoDBService.findOne<UserDocument>(
                    this.userCollection,
                    { username } as any
                );

                if (existingUserByUsername) {
                    res.status(409).json({
                        error: 'Conflict',
                        message: 'Username already taken',
                    });
                    return;
                }
            }

            // Verify contact OTP (required)
            const isContactVerified = await this.otpService.verifyOTP(contact, contactOTP, 'contact', 'signup');
            if (!isContactVerified) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'Invalid or expired contact OTP',
                });
                return;
            }

            // Verify email OTP if provided
            let isEmailVerified = false;
            if (email && emailOTP) {
                isEmailVerified = await this.otpService.verifyOTP(email, emailOTP, 'email', 'signup');
                if (!isEmailVerified) {
                    res.status(400).json({
                        error: 'Bad Request',
                        message: 'Invalid or expired email OTP',
                    });
                    return;
                }
            }

            // Create user - only store verified contact, email/username only if verified
            const userDoc: UserDocument = {
                username: username || null,
                email: (email && isEmailVerified) ? email : null,
                contact,
                isEmailVerified: isEmailVerified,
                isContactVerified: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            const userId = await this.mongoDBService.insertOne<UserDocument>(this.userCollection, userDoc);
            const userIdString = userId?.toString() || '';

            // Generate JWT token
            const token = this.jwtService.generateToken({
                userId: userIdString,
                username: username || '',
                email: email || '',
            });

            logger.info(`User created with contact: ${contact}${email ? ` (${email})` : ''}`);

            res.status(201).json({
                message: 'User created successfully',
                data: {
                    userId: userIdString,
                    username: userDoc.username,
                    email: userDoc.email,
                    contact: userDoc.contact,
                    isEmailVerified: userDoc.isEmailVerified,
                    isContactVerified: userDoc.isContactVerified,
                    token,
                },
            });
        } catch (error: any) {
            logger.error('Error in signup', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    /**
     * Signin with OTP verification
     * POST /api/auth/signin
     */
    async signin(req: Request, res: Response): Promise<void> {
        try {
            const { identifier, otp }: SigninRequest = req.body;

            if (!identifier || !otp) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'identifier and otp are required',
                });
                return;
            }

            // Determine if identifier is email or contact
            const isEmail = identifier.includes('@');
            const type = isEmail ? 'email' : 'contact';

            // Verify OTP
            const isOTPValid = await this.otpService.verifyOTP(identifier, otp, type, 'signin');
            if (!isOTPValid) {
                res.status(401).json({
                    error: 'Unauthorized',
                    message: 'Invalid or expired OTP',
                });
                return;
            }

            // Find user by email or contact
            const user = await this.mongoDBService.findOne<UserDocument>(
                this.userCollection,
                isEmail ? { email: identifier } : { contact: identifier } as any
            );

            if (!user) {
                res.status(404).json({
                    error: 'Not Found',
                    message: 'User not found',
                });
                return;
            }

            // Update verification status if needed
            if (isEmail && !user.isEmailVerified) {
                await this.mongoDBService.updateOne<UserDocument>(
                    this.userCollection,
                    { _id: user._id } as any,
                    { isEmailVerified: true, updatedAt: new Date() }
                );
                user.isEmailVerified = true;
            } else if (!isEmail && !user.isContactVerified) {
                await this.mongoDBService.updateOne<UserDocument>(
                    this.userCollection,
                    { _id: user._id } as any,
                    { isContactVerified: true, updatedAt: new Date() }
                );
                user.isContactVerified = true;
            }

            // Generate JWT token
            const userIdString = user._id?.toString() || '';
            const token = this.jwtService.generateToken({
                userId: userIdString,
                username: user.username || '',
                email: user.email || '',
            });

            logger.info(`User signed in: ${user.username || user.contact} (${identifier})`);

            res.json({
                message: 'Signin successful',
                data: {
                    userId: userIdString,
                    username: user.username,
                    email: user.email,
                    contact: user.contact,
                    isEmailVerified: user.isEmailVerified,
                    isContactVerified: user.isContactVerified,
                    token,
                },
            });
        } catch (error: any) {
            logger.error('Error in signin', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }

    /**
     * Verify OTP (standalone endpoint)
     * POST /api/auth/verify-otp
     */
    async verifyOTP(req: Request, res: Response): Promise<void> {
        try {
            const { identifier, otp, type, purpose }: OTPVerificationRequest & { type: 'email' | 'contact'; purpose: 'signup' | 'signin' | 'verify' } = req.body;

            if (!identifier || !otp || !type) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'identifier, otp, and type are required',
                });
                return;
            }

            if (type !== 'email' && type !== 'contact') {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'type must be either "email" or "contact"',
                });
                return;
            }

            const isOTPValid = await this.otpService.verifyOTP(identifier, otp, type, purpose);

            if (!isOTPValid) {
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'Invalid or expired OTP',
                });
                return;
            }

            res.json({
                message: 'OTP verified successfully',
                data: {
                    identifier,
                    type,
                    verified: true,
                },
            });
        } catch (error: any) {
            logger.error('Error in verifyOTP', error);
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            });
        }
    }
}

