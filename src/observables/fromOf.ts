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


const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}

const miIterable = miGenerador();


from( miIterable ).subscribe(observer);

const source1$ = from([ 1,2,3,4,5,6,7,8,9 ]);
const source2$ = of([ 1,2,3,4,5,6,7,8,9 ]);
const source3$ = from('Jesus');
const source4$ = of('Jesus');

const source5$ = from(fetch( 'https://api.github.com/users/klerith' ));

source1$.subscribe( observer );
source2$.subscribe( observer );
source3$.subscribe( observer );
source4$.subscribe( observer );
source5$.subscribe( observer );

source5$.subscribe( async (resp) => {
    console.log( resp );
    const dataResp = await resp.json();
    console.log(dataResp);

});