import {
  Controller,
  Get,
  Post,
  Res,
  Body,
  HttpStatus,
  NotFoundException,
  Query,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { PersonService } from 'src/person/person.service';

@Controller('auth')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly personService: PersonService,
  ) {}
  @Get()
  async allUsers(@Res() res) {
    //Debug only
    const users = await this.userService.getAllUsers();
    return res.status(HttpStatus.OK).json(users);
  }
  @Get(':username')
  async getUserByName(@Res() res, @Param('username') username) {
    const users = await this.userService.getUser(username);
    return res.status(HttpStatus.OK).json(users);
  }

  @Post('register')
  async register(@Res() res, @Body() createUserDto) {
    const user = await this.userService.createUser(createUserDto);
    if (!user) {
      throw new NotFoundException('Error creating user');
    }
    // Crear una persona relacionada a este usuario, y devolver el id de la persona.
    const person = await this.personService.createAfterRegister(user._id);
    if (!person) {
        throw new NotFoundException('Error creating person');
    }
    return res.status(HttpStatus.OK).json({
      message: 'User created correctly',
      user: {
        id: user._id,
        username: user.username,
        person: person._id,
      },
    });
  }
}
