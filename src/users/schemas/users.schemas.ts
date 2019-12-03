import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const UsersSchema = new Schema({
    username: String,
    password: String,
});
