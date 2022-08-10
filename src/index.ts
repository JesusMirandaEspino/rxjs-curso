import { fromEvent, interval } from "rxjs";

const boton = document.createElement('button');

boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter = interval(1000);
const clickBoton = fromEvent( boton, 'click' );