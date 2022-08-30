import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, debounceTime, distinctUntilChanged, pluck, sampleTime, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document, 'click' );




click$.pipe(
    map( ({ x, y}) => ({x,y}) ),
    sampleTime(2000)
).subscribe( console.log);

