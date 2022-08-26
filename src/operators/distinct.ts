import { distinct, from, of } from "rxjs";

const numeros$ = of( 1,1,2,1,3,4,5,2,5,6,2,3,4,5);

numeros$.pipe(
    distinct()
).subscribe( console.log );


interface Personaje{
    nombre: string;
}


const personajes: Personaje[] = [
    {nombre:'Jesus'},
    {nombre:'Miriam'},
    {nombre:'Geralt'},
    {nombre:'Ramiro'},
    {nombre:'Jesus'},
    {nombre:'Miriam'},
    {nombre:'Geralt'},
    {nombre:'Ramiro'}
]

from( personajes).pipe(
    distinct( p => p.nombre)
).subscribe( console.log );