import { Prisma } from "@prisma/client";
import { SignUpDto } from "src/auth/dto/signup.dto";

export class CreateUserDto extends SignUpDto{}
