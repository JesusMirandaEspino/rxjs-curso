import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

range(1,5).pipe( 
    map<number, string>( val => (val * 10).toString() )
).subscribe( console.log );


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyUpCode$ = keyup$.pipe( map( event => event.code ) );

const keyUpPLuk$ = keyup$.pipe( pluck( 'target', 'baseURI'  ) );

const keyUpMapTo$ = keyup$.pipe( mapTo( 'Tecla presionada'  ) );

keyUpCode$.subscribe( val => console.log( 'map', val ) );
keyUpPLuk$.subscribe( val => console.log( 'pluck', val ) );
keyUpMapTo$.subscribe( val => console.log( 'pluck', val ) );