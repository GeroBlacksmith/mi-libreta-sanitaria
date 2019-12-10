
export class CreateStoryDto {
    readonly title: string;
    readonly description: Date;
    readonly logs: [{
        dateOfLog: Date;
        story: string;
    }];
    readonly pet: string;
}
