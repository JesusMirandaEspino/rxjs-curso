import { of, from } from 'rxjs';


/*  
    of toma argumentos y genera una secuencia,
    from array, observable, promesa, iterable
*/

const observer = {
    next: value => console.log( 'Siguiente [Next]: ', value ),
    error: error => console.warn( 'Error [Obs]: ', error ),
    complete: () => console.info('Completado [Obs]')
}


const source1$ = from([ 1,2,3,4,5,6,7,8,9 ]);
const source2$ = of([ 1,2,3,4,5,6,7,8,9 ]);
const source3$ = from('Jesus');
const source4$ = from(fetch( 'https://api.github.com/users/klerith' ));

const source5$ = from('Jesus');

source1$.subscribe( observer );
source2$.subscribe( observer );
source3$.subscribe( observer );
source4$.subscribe( observer );
source5$.subscribe( observer );