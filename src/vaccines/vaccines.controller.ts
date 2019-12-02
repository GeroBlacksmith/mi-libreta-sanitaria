import { Controller, Get, Post, Res, Param, NotFoundException, HttpStatus, Query, Body, Put } from '@nestjs/common';
import { VaccinesService } from './vaccines.service';
import { CreateVaccineDto } from './dto/create-vaccine.dto';

@Controller('vaccines')
export class VaccinesController {
    constructor(private vaccinesService: VaccinesService) {}

    @Get('pet/:petid')
    async getAllVaccinesFromAPet(@Res() res, @Param('petid') petid) {
        const vaccines = await this.vaccinesService.getAllVaccinesFromPet(petid);
        if (!vaccines) {
            throw new NotFoundException('No vaccines found');
        }
        return res.status(HttpStatus.OK).json(vaccines);
    }

    @Get('list')
    async listVaccines(@Res() res) {
        const listVaccines = await this.vaccinesService.listVaccines();
        return res.status(HttpStatus.OK).json(listVaccines);
    }

    @Post()
    async submitAVaccineToAPet(@Res() res, @Body() createVaccineDto: CreateVaccineDto) {
        const vaccination = await this.vaccinesService.submitVaccination(createVaccineDto);
        return res.status(HttpStatus.OK).json({
            message: 'Created correctly',
            vaccination,
        });
    }

    @Put('id')
    async udpateVaccineRegiter(@Res() res, @Param('id') id, createVaccineDto: CreateVaccineDto) {
        // const vaccination = await this.vaccinesService.
        return await null;
    }
}
