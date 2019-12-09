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
        const user = await this.usersService.getUser(username);
        let isPasswordValid: boolean;
        try {
          isPasswordValid = await bcrypt.compare(user.password, pass);
        } catch (error) {
          throw new InternalServerErrorException(`An error occurred during password comparision.`);
        }
        if (user && user.password === pass) {
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