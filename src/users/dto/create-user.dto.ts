import { RoleEnume } from '@prisma/client';
import { IsEmail, IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber, IsDate, IsInt, IsEnum } from 'class-validator';
import { Type } from 'class-transformer'

export class CreateUserDto {
    @IsEnum(RoleEnume)
    role: RoleEnume

    @IsString()
    username: string

    @IsOptional()
    @IsString()
    firstName: string
    
    @IsOptional()
    @IsString()
    lastName: string

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    phone: number

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    age: number

}

