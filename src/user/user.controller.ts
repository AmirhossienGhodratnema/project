import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";


@Controller('/user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    find() {
        return this.userService.find();
    };

    @Post()
    create(@Body() userData: any) {
        return this.userService.create(userData)
    };

    @Get('/:id')
    findOne(@Param('id') id: number) {
        const user = this.userService.findOne(+id);
        console.log("🚀 ~ UserController ~ findOne ~ user:", user)
        return user
    };

}