import { Role } from "@prisma/client";
import { IsEmail, IsEnum, isEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDTO{
    @IsString()
    @IsNotEmpty()   
    name: string;
    @IsEmail()
    @IsNotEmpty() 
    email: string;

    @IsString()
    @IsNotEmpty() 
    password: string;
    
    @IsString()
    @IsEnum(Role)
    role: Role;
}