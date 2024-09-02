import { $Enums, Prisma } from "@prisma/client";
import { IsDefined, IsEmail, IsIn, IsString, IsStrongPassword } from "class-validator";

export class SignUpDto implements Prisma.UserCreateInput {
    @IsDefined()
    @IsString()
    firstName: string;

    @IsDefined()
    @IsString()
    lastName: string;

    @IsDefined()
    @IsString()
    @IsEmail()
    email: string;

    @IsDefined()
    @IsString()
    @IsStrongPassword()
    password: string;

    @IsDefined()
    @IsString()
    displayName: string;

    @IsDefined()
    @IsIn(["MALE", "FEMALE"])
    gender: $Enums.Gender;
}
