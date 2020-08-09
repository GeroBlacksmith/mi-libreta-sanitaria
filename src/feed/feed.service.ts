import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Feed } from "./interfaces/feed.interface";

@Injectable()
export class FeedService{
    constructor(@InjectModel('Feed') private readonly feedModel: Model<Feed>) {}

    // get all pets feed
    async retrieveAllPetsFeed(petId) {
        const feeds = await this.feedModel.find({petid:petId}).sort({createdAt:'descending'}).exec();
        return feeds;
    }
    // get one pet feed
    async retireveFeed(feedId) {
        const feed = await this.feedModel.findById(feedId);
        return feed;
    }
    // post pet feed


    // delete pet feed
    
}
