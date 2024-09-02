"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const error_messages_enum_1 = require("../constants/error-messages.enum");
const bcrypt_service_1 = require("../utils/bcrypt/bcrypt.service");
const jwt_1 = require("@nestjs/jwt");
const uuid_1 = require("uuid");
let AuthService = class AuthService {
    constructor(userService, bcryptService, jwtService) {
        this.userService = userService;
        this.bcryptService = bcryptService;
        this.jwtService = jwtService;
    }
    async signUp(signUpDto) {
        const userExists = await this.userService.findUserByEmail(signUpDto.email);
        if (userExists) {
            throw new common_1.BadRequestException(error_messages_enum_1.ErrorMessages.EMAIL_ALREADY_EXISTS);
        }
        const hashedPassword = await this.bcryptService.hash(signUpDto.password);
        const user = await this.userService.create({ ...signUpDto, password: hashedPassword });
        return;
    }
    async login(loginDto) {
        const user = await this.userService.findUserByEmail(loginDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException(error_messages_enum_1.ErrorMessages.INVALID_EMAIL_PASSWORD);
        }
        const isPasswordCorrect = this.bcryptService.compare(loginDto.password, user.password);
        if (!isPasswordCorrect) {
            throw new common_1.UnauthorizedException(error_messages_enum_1.ErrorMessages.INVALID_EMAIL_PASSWORD);
        }
        const accessToken = this.jwtService.sign({ email: user.email, id: user.id });
        const refreshToken = (0, uuid_1.v4)();
        await this.userService.addRefreshToken({ token: refreshToken, userId: user.id, expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3) });
        return { accessToken, refreshToken };
    }
    async refreshToken(refreshTokenDto) {
    }
    forgotPassword(forgotPasswordDto) {
        return `This action returns token`;
    }
    resetPassword(resetPasswordDto) {
        return `This action resets the password`;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        bcrypt_service_1.BcryptService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map