export class CreateStoryDto {
    readonly title: string;
    readonly description: Date;
    readonly logs: [string];
    readonly pet: string;
}
