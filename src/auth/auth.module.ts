import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { environment } from 'environment/environment.dev';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: environment.SECRET_KEY,
      signOptions: { expiresIn: environment.JWT_EXPIRATION },
    }),
  ],
  providers: [ AuthService, LocalStrategy, JwtStrategy],
  exports: [ AuthService ],
})
export class AuthModule {}
