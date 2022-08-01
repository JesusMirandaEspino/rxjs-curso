import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';

range(1,5).pipe( 
    map<number, string>( val => (val * 10).toString() )
).subscribe( console.log );


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyUpCode = keyup$.pipe( map( event => event.code ) );


keyUpCode.subscribe( val => console.log( 'map', val ) );