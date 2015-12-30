export interface IHero {
    id: number;
    name: string;
    power: string;
    alterEgo: string;
}

export class Hero implements IHero {
    
    constructor(
        public id: number, 
        public name: string,
        public power: string,
        public alterEgo?: string) {
    }
}