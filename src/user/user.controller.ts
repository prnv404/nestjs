import { Body, Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }
    
    @Get()
    getUser(@Query('user') user: string) {
        
        return this.userService.getUser(user)
    }
}
