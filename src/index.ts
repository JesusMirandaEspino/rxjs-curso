import { from } from "rxjs";
import {  reduce, scan, take } from "rxjs/operators";

const numbers = [ 1,2,3,4,5,6,7,8,9 ];

const totalAcumulador = ( ac: number, cur: number ) =>  ac + cur;

from( numbers )
    .pipe( reduce( totalAcumulador, 0 ) )
    .subscribe( console.log );


from( numbers )
    .pipe( scan( totalAcumulador, 0 ) )
    .subscribe( console.log );