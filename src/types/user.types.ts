export interface User {
    username: string;
    email: string;
    contact: string;
    isEmailVerified: boolean;
    isContactVerified: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserDocument extends User {
    _id?: string;
}

export interface OTPDocument {
    _id?: string;
    identifier: string; // email or contact
    otp: string;
    type: 'email' | 'contact';
    expiresAt: Date;
    createdAt: Date;
    verified?: boolean;
}

export interface SignupRequest {
    username: string;
    email: string;
    contact: string;
}

export interface SigninRequest {
    identifier: string; // email or contact
    otp: string;
}

export interface OTPVerificationRequest {
    identifier: string; // email or contact
    otp: string;
}

export interface SendOTPRequest {
    identifier: string; // email or contact
    type: 'email' | 'contact';
}

