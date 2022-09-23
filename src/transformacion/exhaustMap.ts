import { fromEvent, interval} from "rxjs";
import { exhaustMap, take } from 'rxjs/operators';


const interval$ = interval( 1000 ).pipe( take(3) );
const clicks$ = fromEvent( document, 'click' );


clicks$.pipe( 
    exhaustMap( () => interval$) )
.subscribe( console.log )