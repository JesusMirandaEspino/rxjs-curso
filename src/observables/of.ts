import { of } from 'rxjs';

const obs$ = of( [1,2], {a:1,b:2}, function(){console.log('hola')}, true, Promise.resolve(true) );



console.log('Inicio');
obs$.subscribe( next => console.log('Next', next), null, () => console.log( 'Terminamos' ) );
console.log('Fin');