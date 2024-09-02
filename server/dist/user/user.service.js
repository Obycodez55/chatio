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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        const users = await this.prisma.user.findMany();
        return users;
    }
    async findUserById(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        return user;
    }
    async findUserByEmail(email) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        return user;
    }
    async create(createUserDto) {
        const newUser = await this.prisma.user.create({ data: createUserDto });
        return newUser;
    }
    async update(id, updateUserDto) {
        const updatedUser = await this.prisma.user.update({ where: { id }, data: updateUserDto });
        return updatedUser;
    }
    async remove(id) {
        const deletedUser = await this.prisma.user.delete({ where: { id } });
        return deletedUser;
    }
    async addRefreshToken(data) {
        await this.prisma.refreshToken.create({ data });
        return true;
    }
    async findRefreshToken(token) {
        const refreshToken = await this.prisma.refreshToken.findFirst({ where: { token } });
        return refreshToken;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UserService);
//# sourceMappingURL=user.service.js.map