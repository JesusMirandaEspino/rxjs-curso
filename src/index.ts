import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators';

const body = document.querySelector('body');

const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append( textInput, orderList );


const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );  

input$.pipe( 
        debounceTime<KeyboardEvent>(500),
        map<KeyboardEvent, string>(evento => evento.target['value']),
        map<string, Observable<any>>( texto => ajax.getJSON( `https://api.github.com/users/${texto}` )
        ),
        mergeAll(),
        pluck('items')
    ).subscribe( resp => console.log(resp) );