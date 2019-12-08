import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const PersonSchema = new Schema({
    name: String,
    address: String,
    telephone: String,
    active: { type: Boolean, default: true },
    userid: { type: Schema.Types.ObjectId, ref: 'User' },
});
