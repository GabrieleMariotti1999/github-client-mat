export class User {
    login: string;
    id: number;
    name: string;
    location: string;
}
export class Address {
    lat: number;
    lon: number;
    displayName: string;
}
export class Issue {
    number: number;
    id: number;
    title: string;
    state: string;
    body: string;
    createdAt: Date;
    user: User;
    assignee: User;
    assignees: Array<User>;
}
