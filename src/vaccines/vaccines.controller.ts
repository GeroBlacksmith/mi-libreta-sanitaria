import { Controller, Request, Get, Post, Res, Param, NotFoundException, HttpStatus, Query, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { VaccinesService } from './vaccines.service';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('vaccines')
export class VaccinesController {
    constructor(private vaccinesService: VaccinesService) {}

    @UseGuards(AuthGuard('local'))
    @Get(':id')
    async getOneRegister(@Request() req, @Res() res, @Param('id') id) {
        const vaccine = await this.vaccinesService.getOneRegister(id);
        if (!vaccine) {
            throw new NotFoundException('No register Found');
        }
        return res.status(HttpStatus.OK).json(vaccine);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('pet/:petid')
    async getAllVaccinesFromAPet(@Res() res, @Param('petid') petid) {
        const vaccines = await this.vaccinesService.getAllVaccinesFromPet(petid);
        if (!vaccines) {
            throw new NotFoundException('No vaccines found');
        }
        return res.status(HttpStatus.OK).json(vaccines);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('list')
    async listVaccines(@Res() res) {
        const listVaccines = await this.vaccinesService.listVaccines();
        return res.status(HttpStatus.OK).json(listVaccines);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async submitAVaccineToAPet(@Res() res, @Body() createVaccineDto: CreateVaccineDto) {
        const vaccination = await this.vaccinesService.submitVaccination(createVaccineDto);
        return res.status(HttpStatus.OK).json({
            message: 'Created correctly',
            vaccination,
        });
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async udpateVaccineRegiter(@Res() res, @Param('id') id, createVaccineDto: CreateVaccineDto) {
        const vaccination = await this.vaccinesService.updateRegister(id, createVaccineDto);
        if (!vaccination) {
            throw new NotFoundException('Register not found');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Updated correctly',
            vaccination,
        });
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteVaccineRegistration(@Res() res, @Query('id') id) {
        const vaccineRegister = this.vaccinesService.deleteRegister(id);
        if (!vaccineRegister) {
            throw new NotFoundException('No register found');
        }
        res.status(HttpStatus.OK).json({
            message: 'Deleted correctly',
            vaccineRegister,
        });

    }
}
