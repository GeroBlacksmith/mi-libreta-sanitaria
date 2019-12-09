import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const StorySchema = new Schema({
    title: String,
    description: String,
    logs: [String],
    pet: { type: Schema.Types.ObjectId, ref: 'Pet' },
});
