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
                        
                    }, 1000);

    setTimeout( () => {
        suscriber.complete();
    }, 2000);            
        
    return () => {
        clearInterval( intervalo );
        console.log('Intervalo');
    };
});

const subs1 =intervalos$.subscribe( observer );
const subs2 =intervalos$.subscribe( observer );
const subs3 =intervalos$.subscribe( observer );

subs1.add( subs2 );
subs2.add(subs3);

setTimeout( () => {
    subs1.unsubscribe();
    //  code subs2.unsubscribe();
    //  code subs3.unsubscribe();
    console.log('Intervalo completado');
}, 6000);