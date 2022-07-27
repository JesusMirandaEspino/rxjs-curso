import { interval, timer } from "rxjs";

const observer = {
    next: value => console.log( 'Siguiente [Next]: ', value ),
    complete: () => console.info('Completado [Obs]')
}

const hoyEn5 = new Date();

hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );


const intervalo$ = interval(1000);
// code const timer$ = timer(2000);
// code const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);

console.log('Inicio');
// code intervalo$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');