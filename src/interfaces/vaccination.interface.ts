export interface Vaccination {
    pet: number; // particular data id
    vaccines: string[];
    dateOfVaccination: Date;
    nextDateForVaccination?: Date;
    stamps?: string;
    signOfProfessional?: string; // Image ?
    // is ok to put so optional data?
}
