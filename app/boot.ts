import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {HeroService}  from './hero.service'
import {provide} from 'angular2/core';

let config = {
    title : "Tour of Heros 2"  
};

bootstrap(AppComponent, [
    HeroService,
    provide('app.config', { useValue: config })    
]);