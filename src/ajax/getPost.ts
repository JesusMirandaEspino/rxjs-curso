import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.post( url, { 
        id: 1223,
        nombre: 'Nombre'
    },
    {
        'mi-token': '253454'
    }).subscribe(console.log);


ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': '253454'
    },
    body: {
        id: 1223,
        nombre: 'Nombre'
    }
}).subscribe(console.log);