import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// import { CreateParasitologicalsDto } from './dto/create-user.dto';
import { Parasitologicals } from './interfaces/parasitologicals.interface';
import { ParasitologicalsSchema } from './schemas/parasitologicals.schema';
import { CreateParasitologicalsDto } from './dto/create-parasitologicals.dto';

@Injectable()
export class ParasitologicalsService {

    constructor(@InjectModel('Parasitologicals') private readonly parasitologicalsModel: Model<Parasitologicals>) {}

    async getAllParasitologicalsFromPet(petid: any): Promise<any> {
        const parasitologicalsFromPet = await this.parasitologicalsModel.find({pet: petid});
        return parasitologicalsFromPet;
    }

    async getOneParasitologicalControl(id): Promise<any> {
        const parasitologicalControl = await this.parasitologicalsModel.findOne({_id: id}).exec();
        return parasitologicalControl;
    }

    async submitParasitologicalsControl(createParasitologicalsDto: CreateParasitologicalsDto): Promise<any> {
        const parasitologicalsControl = new this.parasitologicalsModel(createParasitologicalsDto);
        return await parasitologicalsControl.save();
    }

    async updateRegisterParasitological(id, createParasitologicalsDto): Promise<any> {
        const parasitologicalControl = await this.parasitologicalsModel.findOneAndUpdate(id, createParasitologicalsDto, {new: true});
        return parasitologicalControl;
    }

    async deleteRegister(id): Promise<any> {
        const deletedRegister = await this.parasitologicalsModel.findOneAndDelete(id);
        return deletedRegister;
    }

}
