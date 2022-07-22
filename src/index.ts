import { Observable } from 'rxjs';

//  anterior forma const obs$ = Observable.create();

const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();

});

obs$.subscribe( console.log );