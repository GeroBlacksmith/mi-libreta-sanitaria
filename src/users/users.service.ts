import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly usersModel: Model<Users>) {}

    async getUser(username): Promise<any> {
        const user = this.usersModel.findOne({ username } ).exec();
        return await user;
    }

    async createUser(createUserDto: CreateUserDto): Promise<any> {
        const user = new this.usersModel(createUserDto);
        return await user.save();
    }
}
