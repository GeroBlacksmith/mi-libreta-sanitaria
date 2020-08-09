export class CreatePetDto {
    readonly name: string;
    readonly birthDate: Date;
    readonly specie: string;
    readonly gender: string;
    readonly race: string;
    readonly color: string;
    readonly propietary: any; // Person id
}
