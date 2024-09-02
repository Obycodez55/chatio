import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { DatabaseService } from 'src/database/database.service';
import { BcryptService } from 'src/utils/bcrypt/bcrypt.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, DatabaseService, BcryptService],
})
export class AuthModule {}
