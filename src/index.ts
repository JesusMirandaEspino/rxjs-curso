import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log( 'Siguiente [Next]: ', value ),
    error: error => console.warn( 'Error [Obs]: ', error ),
    complete: () => console.info('Completado [Obs]')
}

const intervalos$ = new Observable<number>( suscriber => {
    let count = 0;
const intervalo =  setInterval( () => {
                        count++;
                        suscriber.next( count );
                        console.log(count);
                    }, 2500);
    return () => {
        clearInterval( intervalo );
        console.log('Intervalo');
    };
});

const subs1 =intervalos$.subscribe( num => console.log( num ) );
const subs2 =intervalos$.subscribe( num => console.log( num ) );
const subs3 =intervalos$.subscribe( num => console.log( num ) );

setTimeout( () => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();
}, 7500);