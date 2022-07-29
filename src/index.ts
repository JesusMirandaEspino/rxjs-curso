import { asyncScheduler } from "rxjs";

const saludar =  () => {
    console.log('saludar');
}

const saludar2 =  (nombre) => {
    console.log(`saludar ${nombre}`);
} 



//  code asyncScheduler.schedule( saludar, 2000 );
// code asyncScheduler.schedule( saludar2, 2000, 'Jesus' );


const sub = asyncScheduler.schedule( function(state){
    console.log('state: ', state);
    this.schedule( state + 1, 1000 )
}, 3000, 0 );


// code  setTimeout( () => {
// code      sub.unsubscribe();
// code }, 9000);

asyncScheduler.schedule( () =>  sub.unsubscribe(), 9000 );