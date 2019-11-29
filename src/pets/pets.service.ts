import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
// import { CreatePetsDto } from './dto/create-pets.dto';
import { Pets } from './interfaces/pets.interface';
import { PetsSchema } from './schemas/pets.schema';
import { CreatePetDto } from './dto/create-pet.dto';
import { PersonSchema } from '../person/schemas/person.schema';

@Injectable()
export class PetsService {

    constructor(@InjectModel('Pet') private readonly petsModel: Model<Pets>) {}

    async findAll() {
        return await this.petsModel.find().populate('person').exec();
    }
    async findOne(id) {
        const Person = mongoose.model('Person', PersonSchema);
        return await this.petsModel.findOne({_id: id}).exec();
    }
    async create(createPetDto: CreatePetDto): Promise<Pets> {
        const createPet = new this.petsModel(createPetDto);
        return await createPet.save();
    }
    async update(id: any, createPetDto: CreatePetDto) {
        const updatePet = await this.petsModel.findOneAndUpdate(id, createPetDto);
        return updatePet;
    }
}
