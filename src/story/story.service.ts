import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Story } from './interfaces/story';
import { CreateStoryDto } from './dto/create-story.dto';

@Injectable()
export class StoryService {

    constructor(@InjectModel('Stories') private readonly storiesModel: Model<Story> ) {}

    async createStory(createStoryDto: CreateStoryDto): Promise<any> {
        const story = new this.storiesModel(createStoryDto);
        return await story.save();
    }

    async newLog(id, log: {dateOfLog: Date, story: string}): Promise<any> {
        // get story
        const story = this.storiesModel.findOne({_id: id }).exec();
        // update log array
        story.log.push(log);
        // save changes
        return await story.save();
    }
}
