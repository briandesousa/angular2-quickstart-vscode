export interface IHero {
    id: number;
    name: string;
    heroSecret: string;
    displayHeroSecret: boolean;
}

export class Hero implements IHero {
    
    constructor(
        public id: number, 
        public name: string, 
        public heroSecret: string = "", 
        public displayHeroSecret: boolean = false) {
    }
}