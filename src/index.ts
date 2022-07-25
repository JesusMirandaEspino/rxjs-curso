import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log( 'Siguiente [Next]: ', value ),
    error: error => console.warn( 'Error [Obs]: ', error ),
    complete: () => console.info('Completado [Obs]')
}

