import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, mergeMap, pluck } from 'rxjs/operators';
import { GithubUser, GithubUsersResponse } from "./interfaces/github-user-interface";


const body = document.querySelector('body');

const textInput = document.createElement('input');
const orderList = document.createElement('ol');

const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for( const usuario of usuarios ){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver Pagina';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);
    }

}

body.append( textInput, orderList );


const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );  

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(event => (event.target as HTMLInputElement).value),
    mergeMap<string, Observable<GithubUsersResponse>>(text => ajax.getJSON(
        `https://api.github.com/search/users?q=${text}`
    )),
    map<GithubUsersResponse, GithubUser[]>(item => item.items)
    ).subscribe(mostrarUsuarios);


    const url = `https://httpbin.org/delay/1?arg=`;

input$.pipe(
    pluck('target', 'value'),
    mergeMap( texto => ajax.getJSON(`${url}${texto}`))
).subscribe(console.log)