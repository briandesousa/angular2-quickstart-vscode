import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'help',
    template: '<h2>Helpful Information</h2><p>{{getHelpContent()}}</p>'
})
export class HelpComponent {
    
    constructor(private _routeParams: RouteParams) {
        
    }
    
    getHelpContent() {
        var helpId = this._routeParams.get('id');
        
        if(helpId === '1') {
            return "First help content";
        } else if(helpId === '2') {
            return "Second help content";
        } else {
            return "Default help content (" + helpId + ")";
        }
    }
}