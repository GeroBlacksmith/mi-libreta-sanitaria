import { Controller, Get, Req, Body, Post, Put, Param, Res, HttpStatus, NotFoundException, Query, Delete } from '@nestjs/common';
import { Request } from 'express';
import { CreatePersonDto } from './dto/create-person.dto';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController {

    constructor(private readonly personService: PersonService) {   }

    @Get()
    async getAllPersons(@Res() res) {
        const persons = await this.personService.findAll();
        return res.status(HttpStatus.OK).json(persons);
    }

    @Get(':id')
    async gerPerson(@Res() res, @Param('id') id) {
        const person = await this.personService.findOne(id);
        if (!person) {
            throw new NotFoundException('Person no found');
        }
        return res.status(HttpStatus.OK).json(person);
    }

    @Post()
    async save(@Res() res, @Body() createPersonDto: CreatePersonDto) {
        const person = await this.personService.create(createPersonDto);
        return res.status(HttpStatus.OK).json({
            message: 'Created correctly',
            person,
        });
    }

    @Put(':id/update')
    async update(@Res() res, @Query('id') id, @Body() createPersonDto: CreatePersonDto) {
        const person = await this.personService.update(id, createPersonDto);
        if (!person) {
            throw new NotFoundException('Person no found');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Updated correctly',
            person,
        });
    }
    // TODO: safe delete if person have pets
    @Delete(':id')
    async delete(@Res() res, @Query('id') id) {
        const person = await this.personService.delete(id);
        if (!person) {
            throw new NotFoundException('Person not found');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Deleted correctly',
            person,
        });
    }
    @Put(':id/disable')
    async disable(@Res() res, @Query('id') id) {
        const person = await this.personService.disable(id);
        if (!person) {
            throw new NotFoundException('Person no found');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Disabled correctly',
            person,
        });
    }
    @Put(':id/enable')
    async enable(@Res() res, @Query('id') id) {
        const person = await this.personService.disable(id);
        if (!person) {
            throw new NotFoundException('Person no found');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Disabled correctly',
            person,
        });
    }
}
