export class CreatePetDto {
    readonly name: string;
    readonly birthDate: Date;
    readonly race: string;
    readonly color: string;
    readonly propietary: any; // Person id
}
