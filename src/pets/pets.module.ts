import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PetsController } from './pets.controller';
import { PetsSchema } from './schemas/pets.schema';
import { PetsService } from './pets.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Pet', schema: PetsSchema }])],
    controllers: [PetsController],
    providers: [PetsService],
})
export class PetsModule {}
