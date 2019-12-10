import { Controller, Post, Res, Body, HttpStatus, Get, Param, Put } from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryDto } from './dto/create-story.dto';

@Controller('story')
export class StoryController {

    constructor(private readonly storyService: StoryService) {}

    @Get()
    hello(@Res() res) {
        return res.status(HttpStatus.OK).json({
            message: 'Get story works',
        });
    }

    @Post()
    async submitStory(@Res() res, @Body() createStoryDto: CreateStoryDto) {
        const story = await this.storyService.createStory(createStoryDto);
        return res.status(HttpStatus.OK).json({
            message: 'created correctly',
            story,
        });
    }

    @Put(':id')
    async addLog(@Res() res, @Param('id') id, @Body() {story}) {
        const storyWithNewLog = await this.storyService.newLog(id, story);
        return res.status(HttpStatus.OK).json({
            message: 'Added new Log',
            storyWithNewLog,
        });
    }
}
