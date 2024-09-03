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
import { Prisma, RefreshToken } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { Optional } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private bcryptService: BcryptService,
    private jwtService: JwtService,
    private prisma: DatabaseService
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
    const user = await this.userService.create({ ...signUpDto, password: hashedPassword });

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
    const accessToken = this.jwtService.sign({ email: user.email, id: user.id });
    const refreshToken = await this.addRefreshToken({ userId: user.id, expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3) });
    return { accessToken, refreshToken };
  }

  async refreshToken(refreshTokenDto: RefreshTokenDto) {

  }


  forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    return `This action returns token`;
  }

  resetPassword(resetPasswordDto: ResetPasswordDto) {
    return `This action resets the password`;
  }


  private async addRefreshToken(data: Omit<Prisma.RefreshTokenCreateInput, "token">): Promise<string> {
    // Delete all expired tokens
    await this.prisma.refreshToken.deleteMany({ where: { expiresAt: { lt: new Date() } } });
    // Check if the user already has a refresh token
    const existingRefreshToken = await this.prisma.refreshToken.findFirst({ where: { userId: data.userId } });
    if (existingRefreshToken) {
      return existingRefreshToken.token;
    }


    // Generate a unique token
    let token: string;
    do {
      token = uuidv4(); 
    } while (!!await this.findRefreshToken(token));
    await this.prisma.refreshToken.create({ data: { ...data, token } });
    return token;
  }

  private async findRefreshToken(token: string) {
    const refreshToken = await this.prisma.refreshToken.findUnique({ where: { token } });
    return refreshToken;
  }
}
