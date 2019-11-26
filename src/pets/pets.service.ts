import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// import { CreatePetsDto } from './dto/create-pets.dto';
import { Pets } from './interfaces/pets.interface';
import { PetsSchema } from './schemas/pets.schema';

@Injectable()
export class PetsService {

    constructor(@InjectModel('Pet') private readonly petsModel: Model<Pets>) {}

    async findAll() {
        return await this.petsModel.find().exec();
    }
}
