import {  from, range } from 'rxjs';
import {  filter } from 'rxjs/operators';


range(1,10).pipe( 
    filter( (val, i) =>{ 
        console.log( 'index ', i );
        return val % 2 === 0
    })
).subscribe( console.log );


interface Personajes {
    tipo: string;
    nombre: string;
}

const personajes: Personajes[] = [
    {
        tipo: 'heroe',
        nombre: 'Jesus'
    },
    {
        tipo: 'heroe',
        nombre: 'Miriam'
    },
    {
        tipo: 'heroe',
        nombre: 'Ramiro'
    },
    {
        tipo: 'animal',
        nombre: 'Bob'
    }
];


from( personajes )
    .pipe( 
        filter( personaje => personaje.tipo === 'heroe' )
    )
    .subscribe(console.log);