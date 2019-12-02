import { Controller, Get, Res, Param, HttpStatus, NotFoundException, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { ParasitologicalsService } from './parasitologicals.service';
import { CreateParasitologicalsDto } from './dto/create-parasitologicals.dto';

@Controller('parasitologicals')
export class ParasitologicalsController {
    constructor(private readonly parasitologicalsService: ParasitologicalsService) {}

    @Get('pet/:petId')
    async getParasitologicalsControlFromPet(@Res() res, @Param('pedid') petid) {
        const registerParasitologicals = await this.parasitologicalsService.getAllParasitologicalsFromPet(petid);
        return res.status(HttpStatus.OK).json(registerParasitologicals);
    }

    @Get('id')
    async getOneRegister(@Res() res, @Param('id') id) {
        const oneRegisterParasitological = await this.parasitologicalsService.getOneParasitologicalControl(id);
        if (!oneRegisterParasitological) {
            throw new NotFoundException('Not register found');
        }
        return res.status(HttpStatus.OK).json(oneRegisterParasitological);
    }

    @Post()
    async submitControl(@Res() res, @Body() createParasitologicalsDto: CreateParasitologicalsDto) {
        const controlSumbitted = await this.parasitologicalsService.submitParasitologicalsControl(createParasitologicalsDto);
        return res.status(HttpStatus.OK).json({
            message: 'Created correctly',
            controlSumbitted,
        });
    }

    @Put('id')
    async updateControl(@Res() res, @Param('id') id, @Body() createParasitologicalsDto: CreateParasitologicalsDto) {
        const controlUpdatted = await this.parasitologicalsService.updateRegisterParasitological(id, createParasitologicalsDto);
        if (!controlUpdatted) {
            throw new NotFoundException('Can update register');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Updatted correctly',
            controlUpdatted,
        });
    }

    @Delete('id')
    async deleteControl(@Res() res, @Query('id') id) {
        const constrolDeleted = await this.parasitologicalsService.deleteRegister(id);
        if (!constrolDeleted) {
            throw new NotFoundException('Can update register');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Delete correctly',
            constrolDeleted,
        });
    }
}
