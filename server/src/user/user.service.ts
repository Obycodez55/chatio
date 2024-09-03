import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: DatabaseService) {}

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findUserById (id: string){
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user;
  }

  async findUserByEmail (email: string){
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user;
  }

  async create (createUserDto: CreateUserDto) {
    const newUser = await this.prisma.user.create({ data: createUserDto });
    return newUser;
  }

  async update (id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prisma.user.update({ where: { id }, data: updateUserDto });
    return updatedUser;
  }

  async remove (id: string) {
    const deletedUser = await this.prisma.user.delete({ where: { id } });
    return deletedUser;
  }

}
