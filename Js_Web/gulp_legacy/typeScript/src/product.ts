export interface Saleable {
    name: string;
    price: number;
}

export class Car implements Saleable {
    name: string;
    price: number;
}
