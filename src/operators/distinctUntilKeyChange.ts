import {  distinctUntilChanged, distinctUntilKeyChanged, from } from "rxjs";


interface Personaje{
    nombre: string;
}


const personajes: Personaje[] = [
    {nombre:'Jesus'},
    {nombre:'Miriam'},
    {nombre:'Miriam'},
    {nombre:'Geralt'},
    {nombre:'Geralt'},
    {nombre:'Ramiro'},
    {nombre:'Jesus'},
    {nombre:'Jesus'},
    {nombre:'Miriam'},
    {nombre:'Geralt'},
    {nombre:'Ramiro'},
    {nombre:'Ramiro'}
]

from( personajes).pipe(
    distinctUntilKeyChanged( 'nombre' )
).subscribe( console.log );