import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('pet')
export class PetController {
    // tslint:disable-next-line: no-empty
    constructor() { }

    @Get()
    findAll(): string  {
        return 'Pet find all';
    }

    @Get('propietary/:id')
    findAllFromPropietary(@Req() request: Request): string {
        return `Pet find all from propietary ${request.params.id}`;
    }

    @Get('/vaccinations/:id')
    findAllVaccination(@Req() request: Request): string {
        return `Shoul be only the vacciantion list of the pet ${request.params.id}`;
    }
}
