import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html',
    inputs: ['hero']
})
export class HeroFormComponent {
    
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    model: Hero = new Hero(0, "", "");
    
    submitted = false;
    
    onSubmit() {
        this.submitted = true;
    }
    
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}