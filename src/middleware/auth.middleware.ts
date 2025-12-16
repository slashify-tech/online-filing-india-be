import { Request, Response, NextFunction } from 'express';
import { JWTService } from '../service/jwt.service';
import logger from '../utils/logger';

export interface AuthRequest extends Request {
    user?: {
        userId: string;
        username: string;
        email: string;
    };
}

/**
 * Middleware to verify JWT token and attach user info to request
 */
export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

        if (!token) {
            res.status(401).json({
                error: 'Unauthorized',
                message: 'Access token is required',
            });
            return;
        }

        const jwtService = new JWTService();
        const decoded = jwtService.verifyToken(token);

        if (!decoded) {
            res.status(403).json({
                error: 'Forbidden',
                message: 'Invalid or expired token',
            });
            return;
        }

        // Attach user info to request
        req.user = {
            userId: decoded.userId,
            username: decoded.username,
            email: decoded.email,
        };

        next();
    } catch (error: any) {
        logger.error('Error in authenticateToken middleware', error);
        res.status(500).json({
            error: 'Internal Server Error',
            message: 'Error authenticating token',
        });
    }
};

