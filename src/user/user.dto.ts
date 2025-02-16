import { IsEmail, IsNumber, IsString, Length } from "class-validator";



export class CreateUserDto {
    @IsNumber({}, { message: 'id require is number' })
    id: number;
    @IsString()
    @Length(3, 15, { message: 'Min char: 3 and Max char: 15' })
    name: string;
    @IsString()
    job: string;
}

export class RegisterDto {
    email: string
};

export class loginDto {
    @IsEmail({},{message:'invalida email format'})
    email: string
};