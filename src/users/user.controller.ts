import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    constructor(private userService: UserService) {
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        console.log('DD check');
        
        await this.userService.create(createUserDto)
    }
}