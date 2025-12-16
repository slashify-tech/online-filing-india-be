import jwt, { SignOptions } from 'jsonwebtoken';
import config from '../config/config';
import logger from '../utils/logger';

export interface JWTPayload {
    userId: string;
    username: string;
    email: string;
}

export class JWTService {
    private secret: string;
    private expiresIn: string = '10d'; // Token expires in 7 days

    constructor() {
        // Get JWT secret from environment variable or use a default (not recommended for production)
        this.secret = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
        
        if (!process.env.JWT_SECRET) {
            logger.warn('JWT_SECRET not set in environment variables. Using default secret (NOT SECURE FOR PRODUCTION)');
        }
    }

    /**
     * Generate JWT token
     */
    generateToken(payload: JWTPayload): string {
        try {
            const token = jwt.sign(
                {
                    userId: payload.userId,
                    username: payload.username,
                    email: payload.email,
                },
                this.secret,
                {
                    expiresIn: this.expiresIn,
                } as SignOptions
            );
            return token;
        } catch (error: any) {
            logger.error('Error generating JWT token', error);
            throw new Error('Failed to generate token');
        }
    }

    /**
     * Verify JWT token
     */
    verifyToken(token: string): JWTPayload | null {
        try {
            const decoded = jwt.verify(token, this.secret) as JWTPayload;
            return decoded;
        } catch (error: any) {
            if (error.name === 'TokenExpiredError') {
                logger.warn('JWT token expired');
            } else if (error.name === 'JsonWebTokenError') {
                logger.warn('Invalid JWT token');
            } else {
                logger.error('Error verifying JWT token', error);
            }
            return null;
        }
    }

    /**
     * Decode token without verification (for debugging)
     */
    decodeToken(token: string): JWTPayload | null {
        try {
            const decoded = jwt.decode(token) as JWTPayload;
            return decoded;
        } catch (error: any) {
            logger.error('Error decoding JWT token', error);
            return null;
        }
    }
}

