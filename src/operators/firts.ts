import { fromEvent } from "rxjs";
import { take, first, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>( document, 'click' );


click$.pipe(
    tap( console.log ),
    first<MouseEvent>( event => event.clientY >= 150 )
    ).subscribe({
        next: val => console.log( val ),
        complete: () => console.info('Completado [Obs]')
    });