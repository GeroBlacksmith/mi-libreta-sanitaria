import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const PetsSchema = new mongoose.Schema({
    name: String,
    birthDate: Date,
    specie: String,
    gender: String,
    race: String,
    color: String,
    propietary: { type: Schema.Types.ObjectId, ref: 'Person' },
});
