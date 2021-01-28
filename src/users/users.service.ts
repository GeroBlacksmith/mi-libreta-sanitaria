import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
    async getAllUsers() {
        return await this.usersModel.find().exec();
    }
    constructor(@InjectModel('User') private readonly usersModel: Model<Users>) {}

    async getUser(username): Promise<any> {
        const user = await this.usersModel.findOne({ username } ).exec();
        console.log(user);
        return  user;
    }
   
    async createUser(createUserDto: CreateUserDto): Promise<any> {
        createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
        const user = new this.usersModel(createUserDto);
        return await user.save();
    }
}
