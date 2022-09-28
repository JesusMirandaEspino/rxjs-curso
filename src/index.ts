import { of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";



const numeros$ = of(1, 2, 3, 4, 5).pipe(
    startWith(0)
);

const numerosA$ = of(1, 2, 3, 4, 5).pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
);




numeros$.subscribe(console.log);

numerosA$.subscribe(console.log);