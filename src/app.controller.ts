import { Request, Controller, Get, Post, UseGuards, Res, Body, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './users/dto/create-user.dto';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  getHello(@Res() res) {
    return res.status(HttpStatus.OK).json({
      message: 'Jwt is working',
    });
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

}
