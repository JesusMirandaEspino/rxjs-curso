import { Observable, Observer, Subject } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log( 'Siguiente [Next]: ', value ),
    error: error => console.warn( 'Error [Obs]: ', error ),
    complete: () => console.info('Completado [Obs]')
}

const intervalos$ = new Observable<number>( subs => {
    const numberRamdon = setInterval( () => { subs.next( Math.random() ) }, 1000);

    return () => { clearInterval( numberRamdon ) };

});

const subject$ = new Subject();

const subscription = intervalos$.subscribe( subject$ );

// code const subs1 = intervalos$.subscribe( console.log );
// code const subs2 = intervalos$.subscribe( console.log );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout( () => {
    subject$.next( 10 );
    subject$.complete();
    subscription.unsubscribe();
}, 5000);