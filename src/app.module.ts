import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { PersonModule } from './person/person.module';
import { VaccinesModule } from './vaccines/vaccines.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StoryModule } from './story/story.module';
import { ParasitologicalsModule } from './parasitologicals/parasitologicals.module';
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsersModule,
    AuthModule,
    PersonModule,
    PetsModule,
    VaccinesModule,
    ParasitologicalsModule,
    StoryModule,
    AssetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
