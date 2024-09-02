import { IsDefined, IsString } from "class-validator";

export class ForgotPasswordDto {
    @IsDefined()
    @IsString()
    email: string;
}