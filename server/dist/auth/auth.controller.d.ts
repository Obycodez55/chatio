import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { RefreshTokenDto } from './dto/referesh-token.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signUpDto: SignUpDto): Promise<void>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken(refreshTokenDto: RefreshTokenDto): Promise<void>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): string;
    resetPassword(resetPasswordDto: ResetPasswordDto): string;
}
