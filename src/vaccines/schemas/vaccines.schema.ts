import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const VaccinesSchema = new mongoose.Schema({
    vaccine: String,
    dateOfVaccination: Date,
    pet: { type: Schema.Types.ObjectId, ref: 'Pet' },
    nextDateForVaccination: {type: Date, default: null },
    stamps: {type: String, default: '' },
    signOfProfessional: {type: String, default: '' },
});
