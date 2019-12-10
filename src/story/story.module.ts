import { Module } from '@nestjs/common';
import { StoryController } from './story.controller';
import { StoryService } from './story.service';
import { StorySchema } from './schemas/story.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Stories', schema: StorySchema }])],
  controllers: [StoryController],
  providers: [StoryService],
})
export class StoryModule {}
