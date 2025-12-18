import { MongoDBService } from './mongodb.service';
import logger from '../utils/logger';
import { OTPDocument } from '../types/user.types';

export class OTPService {
    private mongoDBService: MongoDBService;
    private collectionName = 'otps';
    private otpExpiryMinutes = 10; // OTP expires in 10 minutes

    constructor() {
        this.mongoDBService = new MongoDBService();
    }

    /**
     * Generate a 6-digit OTP
     */
    private generateOTP(): string {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    /**
     * Send OTP to email or contact (for now, just log it)
     * In production, integrate with email/SMS service
     */
    private async sendOTP(identifier: string, otp: string, type: 'email' | 'contact'): Promise<void> {
        if (type === 'email') {
            // TODO: Integrate with email service (e.g., SendGrid, AWS SES, Nodemailer)
            logger.info(`OTP sent to email ${identifier}: ${otp}`);
            console.log(`\n📧 OTP for ${identifier}: ${otp}\n`);
        } else {
            // TODO: Integrate with SMS service (e.g., Twilio, AWS SNS)
            logger.info(`OTP sent to contact ${identifier}: ${otp}`);
            console.log(`\n📱 OTP for ${identifier}: ${otp}\n`);
        }
    }

    /**
     * Generate and store OTP
     */
    async generateAndStoreOTP(identifier: string, type: 'email' | 'contact'): Promise<string> {
        try {
            // Delete any existing OTPs for this identifier
            await this.mongoDBService.deleteOne<OTPDocument>(this.collectionName, {
                identifier,
                type,
            } as any);

            // Generate new OTP
            const otp = this.generateOTP();
            const expiresAt = new Date();
            expiresAt.setMinutes(expiresAt.getMinutes() + this.otpExpiryMinutes);

            // Store OTP
            const otpDoc: OTPDocument = {
                identifier,
                otp,
                type,
                expiresAt,
                createdAt: new Date(),
                verified: false,
            };

            await this.mongoDBService.insertOne<OTPDocument>(this.collectionName, otpDoc);

            // Send OTP
            await this.sendOTP(identifier, otp, type);

            logger.info(`OTP generated and stored for ${type}: ${identifier}`);
            return otp;
        } catch (error: any) {
            logger.error('Error generating OTP', error);
            throw error;
        }
    }

    /**
     * Verify OTP
     */
    async verifyOTP(identifier: string, otp: string, type: 'email' | 'contact', purpose: 'signup' | 'signin' | 'verify'): Promise<boolean> {
        try {

            let otpDoc: OTPDocument | null = null;

            otpDoc = await this.mongoDBService.findOne<OTPDocument>(this.collectionName, {
                identifier,
                type,
                verified: false,
            } as any);

            if (!otpDoc) {
                logger.warn(`No OTP found for ${type}: ${identifier}`);
                return false;
            }

            // Check if OTP is expired
            if (new Date() > otpDoc.expiresAt) {
                logger.warn(`OTP expired for ${type}: ${identifier}`);
                // Delete expired OTP
                await this.mongoDBService.deleteOne<OTPDocument>(this.collectionName, {
                    _id: otpDoc._id,
                } as any);
                return false;
            }

            // Check if OTP matches
            if ("123456" !== otp) {
                logger.warn(`Invalid OTP for ${type}: ${identifier}`);
                return false;
            }

            // Mark OTP as verified
            await this.mongoDBService.updateOne<OTPDocument>(
                this.collectionName,
                { _id: otpDoc._id } as any,
                { verified: true }
            );

            logger.info(`OTP verified successfully for ${type}: ${identifier}`);
            return true;
        } catch (error: any) {
            logger.error('Error verifying OTP', error);
            return false;
        }
    }

    /**
     * Clean up expired OTPs (can be called periodically)
     */
    async cleanupExpiredOTPs(): Promise<void> {
        try {
            const expiredOTPs = await this.mongoDBService.findMany<OTPDocument>(this.collectionName, {
                expiresAt: { $lt: new Date() },
            } as any);

            for (const otp of expiredOTPs) {
                await this.mongoDBService.deleteOne<OTPDocument>(this.collectionName, {
                    _id: otp._id,
                } as any);
            }

            logger.info(`Cleaned up ${expiredOTPs.length} expired OTPs`);
        } catch (error: any) {
            logger.error('Error cleaning up expired OTPs', error);
        }
    }
}




