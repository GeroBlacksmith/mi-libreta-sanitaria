import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Story } from './interfaces/story';
import { CreateStoryDto } from './dto/create-story.dto';

@Injectable()
export class StoryService {

    constructor(@((InjectModel('Stories') as unknown) as (target: object, propertyKey: string | symbol | undefined, parameterIndex: number) => void) private readonly storiesModel: Model<Story> ) {}

    async createStory(createStoryDto: CreateStoryDto): Promise<any> {
        const story = new this.storiesModel(createStoryDto);
        return await story.save();
    }

    async newLog(id: string, log: {dateOfLog: Date, story: string}): Promise<any> {
        // get story
        const story = await this.storiesModel.findOne({_id: id}).exec();
        if (!story) {
            return null;
        }
        // update log array
        story.logs.push(log);
        // save changes
        return await story.save();
    }
}
