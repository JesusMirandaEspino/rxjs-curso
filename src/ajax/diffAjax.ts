import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';


const url = 'https://httpbin.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';


const manejaError = (resp: AjaxError) => {
    console.warn('Error', resp);
    return of({
        ok: false,
        usuarios: []
    })
}

const obs1$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
);

const obs2$ = ajax(url).pipe(
    catchError(manejaError)
);

const obs3$ = ajax(url);

obs1$.subscribe( data => console.log('data:', data ));
obs2$.subscribe( data => console.log('data:', data ));
obs3$.pipe(
    catchError(manejaError)
    ).subscribe({
        next: val => console.log('Val:', val),
        error: error => console.warn('Eror:', error),
        complete: () => console.warn('Complete')
});