import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";


const boton = document.createElement('button');

boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBoton$ = fromEvent( boton, 'click' ).pipe(
    tap( () => console.log('Antes del skip') ),
    skip(1),
    tap( () => console.log('Despues del skip') ),
    );


counter$.pipe(
            takeUntil(clickBoton$)
            ).subscribe({
                next: val => console.log( val ),
                complete: () => console.info('Completado [Obs]')
        });


