import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// import { CreatePersonDto } from './dto/create-user.dto';
import { Person } from './interfaces/person.interface';
import { PersonSchema } from './schemas/person.schema';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
export class PersonService {

    constructor(@InjectModel('Person') private readonly personModel: Model<Person> ) {}
    async findAll(): Promise<Person[]> {
        const persons = await this.personModel.find().exec();
        return persons;
    }
    async findOne(id): Promise<Person> {
        const person = await this.personModel.findOne({_id: id}).exec();
        return person;
    }
    async findOneByName(name): Promise<Person> {
        const person = await this.personModel.findOne({name:name}).exec();
        return person;
    }
    async findOneById(id): Promise<Person> {
        const person = await this.personModel.findOne({userid:id}).exec();
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
        // const petsFromPropietary = await this.petSevice.getAllFromPropietary(id);
        // petsFromPropietary.forEach( pet => {
        //     this.petSevice.delete(pet.id);
        // });
        const deletedPerson = await this.personModel.findOneAndDelete(id);
        return deletedPerson;
    }
    async disable(id): Promise<any> {
        const updatedPerson = await this.personModel.findOneAndUpdate(id, {active: false}, {new: true} );
        return updatedPerson;
    }
    async enable(id): Promise<any> {
        const updatedPerson = await this.personModel.findOneAndUpdate(id, {active: true}, {new: true} );
        return updatedPerson;
    }
}
