const url = 'https://api.github.com/users?per_page=5';

const fecthPromesa = fetch(url);

fecthPromesa.then((resp) => {
    resp.json().then((data) => {console.log(data);});
}).catch( error => {console.warn('Error ', error)});
