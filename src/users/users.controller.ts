import { Controller, Get, Post, Res, Body, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post('register')
    async register(@Res() res, @Body() createUserDto: CreateUserDto) {
        const user = this.userService.createUser(createUserDto);
        if (!user) {
            throw new NotFoundException('Error creating user');
        }
        return res.status(HttpStatus.OK).json({
            message: 'User created correctly',
            user,
        });
    }

}
