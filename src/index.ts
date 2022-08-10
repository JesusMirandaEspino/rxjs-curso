import { fromEvent, interval } from "rxjs";
import { takeUntil } from "rxjs/operators";


const boton = document.createElement('button');

boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBoton$ = fromEvent( boton, 'click' );


counter$.pipe(
            takeUntil(clickBoton$)
            ).subscribe({
                next: val => console.log( val ),
                complete: () => console.info('Completado [Obs]')
        });


