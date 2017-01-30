import { Component } from 'angular2/core';

@Component({
    selector: 'app',
    template: '<h1>{{getMessage()}}</h1>'
})
export class AppComponent {
    private message: string = "Hello World";
    public getMessage(): string {
        return this.message;
    }
}