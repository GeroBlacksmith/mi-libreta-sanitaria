import { Controller, Get, Req, Post, Body } from '@nestjs/common';
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
    async savePet(@Body() createPetDto: CreatePetDto ) {
        await this.petService.create(createPetDto);
    }
}
