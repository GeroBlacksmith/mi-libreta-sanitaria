import { Module } from '@nestjs/common';
import { VaccinesController } from './vaccines.controller';
import { VaccinesSchema } from './schemas/vaccines.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { VaccinesService } from './vaccines.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Vaccines', schema: VaccinesSchema }])],
    controllers: [VaccinesController],
    providers: [VaccinesService],
})
export class VaccinesModule {}
