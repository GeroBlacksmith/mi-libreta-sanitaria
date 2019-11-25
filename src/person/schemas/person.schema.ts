import * as mongoose from 'mongoose';
export const PersonSchema = mongoose.Schema({
    name: String,
    address: String,
    telefone: String,
});
