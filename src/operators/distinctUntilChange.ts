import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of( 1,1,2,1,3,4,4,5,2,5,5,6,2,3,4,5);

numeros$.pipe(
    distinctUntilChanged()
).subscribe( console.log );


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
    distinctUntilChanged( (act, ant ) => act.nombre === ant.nombre)
).subscribe( console.log );