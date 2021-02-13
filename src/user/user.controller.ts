import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCreateDto } from 'src/tools/dtos/user.dto';
import { UserModel } from 'src/tools/models/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    createUser(@Body() body: UserCreateDto) {
        return this.userService.createUser(body);
    }

    @Get() 
    getAllUser():UserModel[] { 
        return this.userService.getAllUser();
    }

    @Get(':id') 
    getUserById(@Param() params):UserModel[] { 
        return this.userService.getUserById(params.id);
    }
}
