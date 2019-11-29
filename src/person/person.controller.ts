import { Controller, Get, Req, Body, Post, Put, Param, Res } from '@nestjs/common';
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
    async save(@Res() res, @Body() createPersonDto: CreatePersonDto) {
        return this.personService.create(createPersonDto).then(
            person => person,
            error => error,
        );
    }
    @Put(':id/update')
    async update(@Param('id') id, @Body() createPersonDto: CreatePersonDto) {
        return this.personService.update(id, createPersonDto).then(
            person => person,
            error => error,
        );
    }
}
