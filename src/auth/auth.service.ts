import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    // TODO use Bcrypt for the password
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.getUser(username);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }
}
