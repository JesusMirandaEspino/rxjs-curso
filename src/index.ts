const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
    if(!response.ok){
        throw new Error(response.statusText);
    }

    return response;
}

const fecthPromesa = fetch(url);

fecthPromesa
    .then( manejaErrores )
    .then((resp) => {   resp.json()
    .then((data) => {console.log(data);});
}).catch( error => {console.warn('Error ', error)});
