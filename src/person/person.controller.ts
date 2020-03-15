import { Controller, Get, Req, Body, Post, Put, Param, Res, HttpStatus, NotFoundException, Query, Delete, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { CreatePersonDto } from './dto/create-person.dto';
import { PersonService } from './person.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('persons')
export class PersonController {

    constructor(private readonly personService: PersonService) {   }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAllPersons(@Res() res) {
        const persons = await this.personService.findAll();
        return res.status(HttpStatus.OK).json(persons);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getPerson(@Res() res, @Param('id') id) {
        const person = await this.personService.findOne(id);
        if (!person) {
            throw new NotFoundException('Person no found');
        }
        return res.status(HttpStatus.OK).json(person);
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('name/:name')
    async getPersonByName(@Res() res, @Param('name') name) {
        const person = await this.personService.findOneByName(name);
        if (!person) {
            throw new NotFoundException('Person no found');
        }
        return res.status(HttpStatus.OK).json(person);
    }
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async save(@Res() res, @Body() createPersonDto: CreatePersonDto) {
        const person = await this.personService.create(createPersonDto);
        return res.status(HttpStatus.OK).json({
            message: 'Created correctly',
            person,
        });
    }

    @UseGuards(AuthGuard('jwt'))
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
    @UseGuards(AuthGuard('jwt'))
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
    // Not working
    @UseGuards(AuthGuard('jwt'))
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
    // Not working
    @UseGuards(AuthGuard('jwt'))
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
