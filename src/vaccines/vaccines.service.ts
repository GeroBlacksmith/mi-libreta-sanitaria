import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { Vaccines } from './interfaces/vaccines.interface';
import { VaccinesSchema } from './schemas/vaccines.schema';
import { vaccines } from '../data/vaccines';

@Injectable()
export class VaccinesService {

    constructor(@InjectModel('Vaccines') private readonly vaccinesModel: Model<Vaccines>) {}
    async findAll() {
        return await this.vaccinesModel.find().exec();
    }
    async getAllVaccinesFromPet(petid: any): Promise<any> {
        const vaccinesFromPet = await this.vaccinesModel.find({pet: petid});
        return vaccinesFromPet;
    }
    async submitVaccination(createVaccineDto: CreateVaccineDto): Promise<any> {
        const vaccination = new this.vaccinesModel(createVaccineDto);
        return await vaccination.save();
    }
    async listVaccines(): Promise<string[]> {
        return await vaccines;
    }
    async deleteRegister(id: any): Promise<any> {
        const vaccineRegister = this.vaccinesModel.findOneAndDelete(id);
        return await vaccineRegister;
    }

    async updateRegister(id: any, createVaccineDto: CreateVaccineDto): Promise<any> {
        const updatedRegister = this.vaccinesModel.findOneAndUpdate(id, createVaccineDto, {new: true});
        return await updatedRegister;
    }

    async getOneRegister(id: any): Promise<any> {
        const vaccineRegister = this.vaccinesModel.findOne({_id: id}).exec();
        return await vaccineRegister;
    }
}
