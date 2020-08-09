import { Controller } from '@nestjs/common';
import { FeedService } from './feed.service';

@Controller('feed')
export class FeedController {
    constructor(private readonly feedService: FeedService) {}
    
    // Get all feed of a pet id order by creation decreasing.

    // Get one feed feed id.
    
    // Post a feed for a pet id

    // Delete a feed for a pet id
}
