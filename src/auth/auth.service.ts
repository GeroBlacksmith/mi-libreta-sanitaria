import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    // TODO use Bcrypt for the password
    async validateUser(username: string, pass: string): Promise<any> {
        console.log("login", username, pass);
        const user = await this.usersService.getUser(username);
        console.log(user)
        let isPasswordValid: boolean;
        await bcrypt.compare(pass,user.password)
        .then(data=>{
            isPasswordValid=data;
            return;
        });
        console.log(isPasswordValid)
        if (user && isPasswordValid) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
