import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost/nest'), PetsModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
