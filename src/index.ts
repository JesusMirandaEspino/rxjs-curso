import { interval, timer } from "rxjs";

const observer = {
    next: value => console.log( 'Siguiente [Next]: ', value ),
    complete: () => console.info('Completado [Obs]')
}

const intervalo$ = interval(1000);
const timer$ = timer(2000);

console.log('Inicio');
// code intervalo$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');