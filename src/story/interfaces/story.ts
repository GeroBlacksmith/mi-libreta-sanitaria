export interface Story {
    title: string;
    description: string;
    logs: [{
        dateOfLog: Date;
        story: string;
    }];
    pet: string; // Pet id
}
