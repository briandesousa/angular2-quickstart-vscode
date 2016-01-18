import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'characterCount'})
export class CharacterCountPipe implements PipeTransform {
    
    transform(value: string) {
        return value + (' (' + value.length + ' characters)');
    }
}