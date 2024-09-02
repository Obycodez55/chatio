import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UserService } from 'src/user/user.service';
import { BcryptService } from 'src/utils/bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from './dto/referesh-token.dto';
export declare class AuthService {
    private userService;
    private bcryptService;
    private jwtService;
    constructor(userService: UserService, bcryptService: BcryptService, jwtService: JwtService);
    signUp(signUpDto: SignUpDto): Promise<void>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken(refreshTokenDto: RefreshTokenDto): Promise<void>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): string;
    resetPassword(resetPasswordDto: ResetPasswordDto): string;
}
