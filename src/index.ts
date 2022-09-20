import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators';
import { GithubUser, GithubUsersResponse } from "./interfaces/github-user-interface";

const body = document.querySelector('body');

const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append( textInput, orderList );


const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );  

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(event => (event.target as HTMLInputElement).value),
    map<string, Observable<GithubUsersResponse>>(text => ajax.getJSON(
        `https://api.github.com/search/users?q=${text}`
    )),
    mergeAll<Observable<GithubUsersResponse>>(),
    map<GithubUsersResponse, GithubUser[]>(item => item.items)
    ).subscribe(users => {
    console.log('users', users);
});