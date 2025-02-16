import { Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto, loginDto, RegisterDto } from "./user.dto";
import { EmailValidationPipe } from "./pipes/email.pipes";


@Controller('/user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    find() {
        return this.userService.find();
    };

    @Post()
    create(@Body(new ValidationPipe()) userDto: CreateUserDto) {
        return this.userService.create(userDto)
    };


    @Post('/register')
    register(@Body('email', EmailValidationPipe) email: string) {
        return email;
    }

    @Post('/login')
    login(@Body() loginDto: loginDto){
        return loginDto 
    }

    @Get('/:id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.findOne(+id);
        console.log("🚀 ~ UserController ~ findOne ~ user:", user)
        return user
    };

}