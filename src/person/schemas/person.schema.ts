import * as mongoose from 'mongoose';
export const PersonSchema = new mongoose.Schema({
    name: String,
    address: String,
    telefone: String,
});
