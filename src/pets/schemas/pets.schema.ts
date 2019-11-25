import * as mongoose from 'mongoose';

export const PetsSchema = new mongoose.Schema({
    name: String,
    birthDate: Date,
    race: String,
    color: String,
    propietary: Number,
})