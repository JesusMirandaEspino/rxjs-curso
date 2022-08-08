import { fromEvent } from "rxjs";
import { take, first } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>( document, 'click' );


click$.pipe(
    first()
    ).subscribe({
        next: val => console.log( val ),
        complete: () => console.info('Completado [Obs]')
    });