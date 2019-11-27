import { Controller, Get, Req, Body, Post } from '@nestjs/common';
import { Request } from 'express';
import { CreatePersonDto } from './dto/create-person.dto';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {

    constructor(private readonly personService: PersonService) {   }
    @Get(':id')
    find(@Req() req: Request) {
        return this.personService.findOne(req.params.id);
    }
    @Get()
    findAll() {
        return this.personService.findAll();

    }

    @Post()
    async save(@Body() createPersonDto: CreatePersonDto) {
        await this.personService.create(createPersonDto);
    }

}
