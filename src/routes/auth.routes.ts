import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();
const authController = new AuthController();

// POST /api/auth/send-otp - Send OTP to email or contact
router.post('/send-otp', (req, res) => authController.sendOTP(req, res));

// POST /api/auth/signup - Signup with OTP verification
router.post('/signup', (req, res) => authController.signup(req, res));

// POST /api/auth/signin - Signin with OTP verification
router.post('/signin', (req, res) => authController.signin(req, res));

// POST /api/auth/verify-otp - Verify OTP (standalone)
router.post('/verify-otp', (req, res) => authController.verifyOTP(req, res));

export default router;




