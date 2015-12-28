import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    inputs: ['hero']
})
export class HeroDetailComponent {
    
    public hero : Hero;
    
    onClickShowHeroSecret(event) {
        this.hero.displayHeroSecret = !this.hero.displayHeroSecret;
    }
}