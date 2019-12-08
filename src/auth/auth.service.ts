import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
      private readonly usersService: UsersService,
      private readonly jwtService: JwtService,
    ) {}

    // TODO use Bcrypt for the password
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.getUser(username);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }

    async login(user: any) {
      const payload = { username: user.username, sub: user.userId };
      return {
        access_token: this.jwtService.sign(payload)
      };
    }
    // Front end
    // parseJWT(token: string) {
    //   const base64Url = token.split('.')[1];
    //   const base64 = base64Url.replace('-', '+').replace('_', '/');
    //   return JSON.parse(window.atob(base64));
    // }
}
