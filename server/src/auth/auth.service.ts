import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UserService } from 'src/user/user.service';
import { ErrorMessages } from 'src/constants/error-messages.enum';
import { BcryptService } from 'src/utils/bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { RefreshTokenDto } from './dto/referesh-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private bcryptService: BcryptService,
    private jwtService : JwtService
  ) { }

  async signUp(signUpDto: SignUpDto) {
    // Check if the user already exists
    const userExists = await this.userService.findUserByEmail(signUpDto.email);
    if (userExists) {
      throw new BadRequestException(ErrorMessages.EMAIL_ALREADY_EXISTS);
    }
    
    // Hash the password
    const hashedPassword = await this.bcryptService.hash(signUpDto.password);

    // Create a new user
    const user = await this.userService.create({...signUpDto, password: hashedPassword});

    // Return nothing
    return;
  }

  async login(loginDto: LoginDto) {
    // Check if the user exists
    const user = await this.userService.findUserByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException(ErrorMessages.INVALID_EMAIL_PASSWORD);
    }

    // Check if the password is correct
    const isPasswordCorrect = this.bcryptService.compare(loginDto.password, user.password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException(ErrorMessages.INVALID_EMAIL_PASSWORD);
    }

    // Sign Jwt token
    const accessToken = this.jwtService.sign({email: user.email, id: user.id});
    const refreshToken = uuidv4();
    await this.userService.addRefreshToken({token: refreshToken, userId: user.id, expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)});
    return {accessToken, refreshToken};
  }

  async refreshToken(refreshTokenDto: RefreshTokenDto){
    
  }
  

  forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    return `This action returns token`;
  }

  resetPassword(resetPasswordDto: ResetPasswordDto) {
    return `This action resets the password`;
  }
}
