import { Observable, Observer } from 'rxjs';

//  anterior forma const obs$ = Observable.create();

const observer: Observer<any> = {
    next: value => console.log( 'Siguiente [Next]: ', value ),
    error: error => console.warn( 'Error [Obs]: ', error ),
    complete: () => console.info('Completado [Obs]')
}

const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error
    //  error const a = undefined;
    // error a.nombre = 'Jesus;

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

obs$.subscribe( observer );

// code obs$.subscribe( valor =>  
// code     console.log('Next: ', valor),
// code     error => console.warn('Error: ', error),
// code     () => console.info('Completado')
// code );