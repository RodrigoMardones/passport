import { IsDefined, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
export class UserParams {
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password!: string;

    @IsDefined()
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    dni!: string;
}