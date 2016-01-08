import {Component} from 'angular2/core';
import {Inject} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroFormComponent} from './hero-form.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles:[`
        .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
        .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
        .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
        .heroes .badge {
            font-size: small;
            color: white;
            padding: 0.1em 0.7em;
            background-color: #369;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -1px;
        }
        .selected { background-color: #EEE; color: #369; }
 
    `],
    directives: [HeroFormComponent],
    providers: []
})
export class AppComponent implements OnInit { 

    public title = 'Tour of Heroes';
    public heroes: Hero[];    
    public selectedHero: Hero;
    
    constructor(private _heroService: HeroService, @Inject('app.config') config) {
        this.title = config.title;
    }
    
    getHeroes() {
        this._heroService.getHeros()
            .then((heroes: Hero[]) => this.heroes = heroes);
    }
    
    ngOnInit() {
        this.getHeroes();
    }
    
    onSelect(hero : Hero) {
        this.selectedHero = hero;
    }
    
    addHero(heroName: string) {
        this.heroes.push(new Hero(this.getRandomIntInclusive(100, 10000), heroName, ""));
    }
    
    /**
     * Returns a random integer between min (included) and max (included)
     */
    private getRandomIntInclusive(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
}