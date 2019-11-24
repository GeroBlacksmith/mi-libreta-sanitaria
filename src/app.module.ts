import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetController } from './controllers/pet.controller';

@Module({
  imports: [],
  controllers: [AppController, PetController],
  providers: [AppService],
})
export class AppModule {}
