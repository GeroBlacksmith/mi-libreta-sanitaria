import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersSchema } from './schemas/users.schemas';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { PersonModule } from 'src/person/person.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }]), PersonModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
