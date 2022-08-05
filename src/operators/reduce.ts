import { interval } from "rxjs";
import {  reduce, take } from "rxjs/operators";


const numbers = [ 1,2,3,4,5,6,7,8,9 ];

const totalReducer = ( acumulador: number, valortotal: number ) => {
    return acumulador + valortotal;
}

const total = numbers.reduce( totalReducer, 0 );

interval(1000).pipe(
        take(3),
        reduce( totalReducer )
    ).subscribe( { 
        next: val => console.log( val ),
        complete: () => console.info('Completado [Obs]')
    })