import { interval, of } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';

const letras$ = of('a', 'b', 'c', 'd', 'e', 'f');

letras$.pipe(
        mergeMap( (letra) => interval(1000).pipe(
            map( i => letra +  i),
            take(3)
    ))).subscribe({
    next: val => console.log('next: ', val),
    complete:() => console.log('complete: ')
});

