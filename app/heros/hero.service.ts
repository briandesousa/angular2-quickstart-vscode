import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heros';

@Injectable()
export class HeroService {
    
    getHeros() {
        //return Promise.resolve(HEROES);
        return new Promise(resolve => 
            setTimeout(() => resolve(HEROES), 5)
        );
    }
}