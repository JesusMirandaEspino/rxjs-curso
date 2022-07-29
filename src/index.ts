import { asyncScheduler } from "rxjs";

const saludar =  () => {
    console.log('saludar');
}

const saludar2 =  (nombre) => {
    console.log(`saludar ${nombre}`);
} 



//  code asyncScheduler.schedule( saludar, 2000 );


// code asyncScheduler.schedule( saludar2, 2000, 'Jesus' );


asyncScheduler.schedule( function(state){
    console.log('state: ', state)
}, 3000, 0 );