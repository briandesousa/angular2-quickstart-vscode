import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {HeroService}  from './hero.service'

bootstrap(AppComponent, [HeroService]);