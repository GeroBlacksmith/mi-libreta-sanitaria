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
    async findAll() {
        return await this.personModel.find().exec();
    }

    async create(createPersonDto: CreatePersonDto): Promise<Person> {
        const createPerson = new this.personModel(createPersonDto);
        return await createPerson.save();
    }
}
