import { Controller, Get, Req, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { Request } from 'express';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('pets')
export class PetsController {

    constructor(private readonly petService: PetsService) { }

    @Get()
    findAll() {
        return this.petService.findAll();
    }
    @Get(':id')
    findOne(@Req() request: Request) {
        return this.petService.findOne(request.params.id);
    }
    @Get('propietary/:id')
    findAllFromPropietary(@Req() request: Request): string {
        return `Pet find all from propietary ${request.params.id}`;
    }

    @Get('/vaccinations/:id')
    findAllVaccination(@Req() request: Request): string {
        return `Shoul be only the vacciantion list of the pet ${request.params.id}`;
    }

    @Post()
    async save(@Body() createPetDto: CreatePetDto ) {
        await this.petService.create(createPetDto);
        return 'Creado';
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() createPetDto: CreatePetDto ) {
        const updatedPet = await this.petService.update(id, createPetDto);
        return updatedPet;
    }
}
