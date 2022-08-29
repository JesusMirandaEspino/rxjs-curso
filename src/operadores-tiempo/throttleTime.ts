import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';


const click$ = fromEvent( document, 'click' );

console.log('Inicio');


click$.pipe(
    throttleTime( 3000 )
).subscribe( console.log);

const input = document.createElement( 'input' );
document.querySelector('body').append( input );


const input$ = fromEvent( input, 'keyup');


input$.pipe(
    throttleTime( 1000, asyncScheduler, { leading: true, trailing: true }  ),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log)