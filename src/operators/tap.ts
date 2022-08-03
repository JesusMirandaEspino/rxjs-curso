import { range  } from "rxjs";
import { tap, map} from "rxjs/operators";

const numeros$ = range(1,10);

numeros$.pipe(
    tap( x => {
        console.log( 'Antes', x )
        return 100;
    }),map( val => val * 10 ),
    tap({ 
            next: valor => console.log( 'Despues', valor ),
            complete: () => console.info('Completado [Obs]') 
        })
).subscribe( num => console.log( 'Num: ', num ) );