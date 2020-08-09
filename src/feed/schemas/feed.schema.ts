import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const FeedSchema = new Schema({
    text: String,
    photoUrl: String,
    active: {type: Boolean, default: true},
    createdAt: {type: Date, default: Date.now()},
    petid: { type: Schema.Types.ObjectId, ref: 'Pet' },
});
