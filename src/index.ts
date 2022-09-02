import { catchError, pluck } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax'
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
    if(!response.ok){
        throw new Error(response.statusText);
    }

    return response;
}

const atrapaError = (err: AjaxError) => {
            console.warn('Error ', err);
                return of([]);
            }

const fecthPromesa = fetch(url);


/* code promise
fecthPromesa
    .then( manejaErrores )
    .then((resp) => {   resp.json()
    .then((data) => {console.log(data);});
}).catch( error => {console.warn('Error ', error)});*/


ajax(url).pipe(
    pluck( 'response' ),
    catchError( atrapaError )
    ).subscribe( user => {console.log(user)});