import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// import { CreatePersonDto } from './dto/create-user.dto';
import { Person } from './interfaces/person.interface';
import { PersonSchema } from './schemas/person.schema';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
export class PersonService {

    constructor(@InjectModel('Person') private readonly personModel: Model<Person>) {}
    async findAll(): Promise<Person[]> {
        const persons = await this.personModel.find().exec();
        return persons;
    }
    async findOne(id): Promise<Person> {
        const person = await this.personModel.findOne({_id: id}).exec();
        return person;
    }
    async create(createPersonDto: CreatePersonDto): Promise<Person> {
        const createPerson = await this.personModel(createPersonDto);
        return createPerson.save();
    }
    async update(id, createPersonDto): Promise<Person> {
        const updatedPerson = await this.personModel.findOneAndUpdate(id, createPersonDto, {new: true} );
        return updatedPerson;
    }
    // TODO: safe delete if person have pets
    async delete(id: any): Promise<any> {
        const deletedPerson = await this.personModel.findOneAndDelete(id);
        return deletedPerson;
    }
}
