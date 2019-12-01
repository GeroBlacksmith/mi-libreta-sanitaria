import { Controller, Get, Post, Res, Param, NotFoundException, HttpStatus, Query, Body } from '@nestjs/common';
import { VaccinesService } from './vaccines.service';
import { CreateVaccineDto } from './dto/create-vaccine.dto';

@Controller('vaccines')
export class VaccinesController {
    // tslint:disable-next-line: no-empty
    constructor(private vaccinesService: VaccinesService) {}

    @Get('pet/:petid')
    async getAllVaccinesFromAPet(@Res() res, @Param('petid') petid) {
        const vaccines = await this.vaccinesService.getAllVaccinesFromPet(petid);
        if (!vaccines) {
            throw new NotFoundException('No vaccines found');
        }
        return res.status(HttpStatus.OK).json(vaccines);
    }

    @Post()
    async submitAVaccineToAPet(@Res() res, @Body() createVaccineDto: CreateVaccineDto) {
        const vaccination = await this.vaccinesService.submitVaccination(createVaccineDto);
        return res.status(HttpStatus.OK).json({
            message: 'Created correctly',
            vaccination,
        });
    }

}
