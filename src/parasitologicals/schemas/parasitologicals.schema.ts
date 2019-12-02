import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ParasitologicalsSchema = new Schema({
    pet: Number,
    dateOfControl: Date,
    coproparasitologicalAnalysis: String,
    weight: Number,
    appliedDrug: String,
});
