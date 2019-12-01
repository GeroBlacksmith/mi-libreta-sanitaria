export class CreateVaccineDto {
    readonly vaccines: string;
    readonly dateOfVaccination: Date;
    readonly pet: string;
    readonly nextDateForVaccination?: Date;
    readonly stamps?: string;
    readonly signOfProfessional?: string;
}
