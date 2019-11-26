import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { PersonModule } from './person/person.module';
@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost/nest'), PetsModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
