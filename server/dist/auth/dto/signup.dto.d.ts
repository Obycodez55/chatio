import { $Enums, Prisma } from "@prisma/client";
export declare class SignUpDto implements Prisma.UserCreateInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    displayName: string;
    gender: $Enums.Gender;
}
