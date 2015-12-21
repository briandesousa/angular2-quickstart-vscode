import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>My Third Angular 2 App {{getName()}}</h1>'
})
export class AppComponent { 

    public getName() : String {
        return "Brian the Man";
    }
}