import { Module } from '@nestjs/common';
import { ParasitologicalsController } from './parasitologicals.controller';
import { ParasitologicalsService } from './parasitologicals.service';
import { ParasitologicalsSchema } from './schemas/parasitologicals.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [ MongooseModule.forFeature([{ name: 'Parasitological', schema: ParasitologicalsSchema }])],
    controllers: [ParasitologicalsController],
    providers: [ParasitologicalsService],
})
export class ParasitologicalsModule {}
