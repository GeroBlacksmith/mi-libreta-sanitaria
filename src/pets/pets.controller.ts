import { Controller, Get, Req, Post, Body, Delete, Param, Put, Res, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { Request } from 'express';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('pets')
export class PetsController {

    constructor(private readonly petService: PetsService) { }

    @Get()
    async getAllPets(@Res() res) {
        const pets = await this.petService.findAll();
        return res.status(HttpStatus.OK).json(pets);
    }
    @Get(':id')
    async getPet(@Res() res, @Param('id') id) {
        const pet = await this.petService.findOne(id);
        if (!pet) {
            throw new NotFoundException('Pet not found');
        }
        return res.status(HttpStatus.OK).json(pet);
    }

    @Get('propietary/:id')
    async findAllFromPropietary(@Res() res, @Param('id') propietaryId) {
        const pets = await this.petService.getAllFromPropietary(propietaryId);
        if (!pets) {
            throw new NotFoundException('No pets from this propietary');
        }
        return res.status(HttpStatus.OK).json(pets);
    }

    // TODO: vaccination implementation required
    @Get('/vaccinations/:id')
    findAllVaccination(@Req() request: Request): string {
        return `Shoul be only the vacciantion list of the pet ${request.params.id}`;
    }

    @Post()
    async save(@Res() res, @Body() createPetDto: CreatePetDto ) {
        const pet = await this.petService.create(createPetDto);
        return res.status(HttpStatus.OK).json({
            message: 'Created correctly',
            pet,
        });
    }

    @Put(':id/update')
    async update(@Res() res, @Query('id') id, @Body() createPetDto: CreatePetDto ) {
        const pet = await this.petService.update(id, createPetDto);
        if (!pet) {
            throw new NotFoundException('Pet updated');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Updated correctly',
            pet,
        });
    }

    @Delete(':id')
    async delete(@Res() res, @Query('id') id) {
        const pet = await this.petService.delete(id);
        if (!pet) {
            throw new NotFoundException('Pet not found');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Delete pet',
            pet,
        });
    }
}
