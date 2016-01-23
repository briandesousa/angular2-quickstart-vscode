import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroComponent} from './hero.component';
import {HelpComponent} from './help.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/help', name: 'Help', component: HelpComponent},
  {path:'/', name: 'Home', component: HeroComponent, useAsDefault: true}
])
export class AppComponent { 

}