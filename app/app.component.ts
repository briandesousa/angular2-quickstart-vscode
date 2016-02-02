import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroComponent} from './heros/hero.component';
import {Help} from './help/help.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/help/...', name: 'Help', component: Help},
  {path:'/hero', name: 'Home', component: HeroComponent, useAsDefault: true}
])
export class AppComponent { 

    constructor(private _router: Router) {
    }
    
    heroHelpClick() {
        this._router.navigate(['Help', 'HelpDetail', { 'id' : '2', 'junkparam':'junk' }]);
        return false;
    }
}