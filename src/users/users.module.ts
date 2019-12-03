import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersSchema } from './schemas/users.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
