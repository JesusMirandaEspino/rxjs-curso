import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement( 'div' );

texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in egestas ipsum, a interdum massa. In et mauris tincidunt, ultricies tortor et, laoreet enim. Suspendisse potenti. Donec sed dapibus eros, sed imperdiet libero. Suspendisse ut hendrerit odio, eget congue ante. Curabitur blandit blandit nulla, ac mattis nisi aliquam eleifend. Nam a placerat est. Duis tincidunt suscipit quam, eget rhoncus purus hendrerit vitae. Proin laoreet commodo sapien, id aliquet ipsum.
<br/><br/>
Proin ut nisi consectetur, porta nunc quis, pellentesque nisl. Nulla maximus rutrum sem sed volutpat. Sed fringilla, ex a dictum rhoncus, dolor risus finibus nunc, ut fermentum mi turpis a est. Nam aliquam nulla ut pellentesque tincidunt. Maecenas quis aliquet elit. Praesent facilisis ut diam vitae pharetra. Fusce vel urna ut augue porta molestie. Integer libero dolor, congue auctor rutrum vitae, porta non libero.
<br/><br/>
Mauris in ante porta, rhoncus sem id, porttitor enim. Aliquam at pretium nibh. Praesent feugiat lacus vel tortor pellentesque aliquet. Ut molestie accumsan nulla, ultrices facilisis lacus ultricies non. Cras vulputate dapibus libero, vehicula porttitor tortor tempus vitae. Curabitur malesuada faucibus erat, ut venenatis sapien hendrerit non. Maecenas bibendum molestie auctor. Nunc tempor eu ante id ultricies. Donec at egestas justo.
<br/><br/>
Vestibulum vel metus odio. Nunc vulputate, tortor nec scelerisque tristique, nibh turpis egestas diam, vel feugiat nunc nisl quis metus. Morbi in lacus eget urna porttitor facilisis id vestibulum diam. Pellentesque malesuada feugiat orci a dapibus. Nam scelerisque nunc orci, posuere semper eros aliquet non. Duis in libero a magna viverra luctus. Integer quis ligula sem. Vivamus neque nibh, convallis eget consectetur vel, condimentum sed odio. Integer ornare interdum orci, quis euismod neque feugiat a. Duis porta nunc urna, vel dignissim velit suscipit eget. Suspendisse aliquam venenatis leo ac laoreet.
<br/><br/>
Proin id lorem at enim posuere semper vitae vel sem. Nulla facilisi. Pellentesque fermentum velit quis convallis iaculis. Integer tristique nunc at libero rhoncus ullamcorper. Nullam vel dignissim diam, non finibus elit. Donec euismod at est eget lobortis. Cras hendrerit nibh diam, at euismod eros elementum sed. Nullam malesuada luctus eros a mollis. Aenean placerat, erat consequat elementum fringilla, urna neque rutrum justo, nec interdum arcu lacus eget risus.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in egestas ipsum, a interdum massa. In et mauris tincidunt, ultricies tortor et, laoreet enim. Suspendisse potenti. Donec sed dapibus eros, sed imperdiet libero. Suspendisse ut hendrerit odio, eget congue ante. Curabitur blandit blandit nulla, ac mattis nisi aliquam eleifend. Nam a placerat est. Duis tincidunt suscipit quam, eget rhoncus purus hendrerit vitae. Proin laoreet commodo sapien, id aliquet ipsum.
<br/><br/>
Proin ut nisi consectetur, porta nunc quis, pellentesque nisl. Nulla maximus rutrum sem sed volutpat. Sed fringilla, ex a dictum rhoncus, dolor risus finibus nunc, ut fermentum mi turpis a est. Nam aliquam nulla ut pellentesque tincidunt. Maecenas quis aliquet elit. Praesent facilisis ut diam vitae pharetra. Fusce vel urna ut augue porta molestie. Integer libero dolor, congue auctor rutrum vitae, porta non libero.
<br/><br/>
Mauris in ante porta, rhoncus sem id, porttitor enim. Aliquam at pretium nibh. Praesent feugiat lacus vel tortor pellentesque aliquet. Ut molestie accumsan nulla, ultrices facilisis lacus ultricies non. Cras vulputate dapibus libero, vehicula porttitor tortor tempus vitae. Curabitur malesuada faucibus erat, ut venenatis sapien hendrerit non. Maecenas bibendum molestie auctor. Nunc tempor eu ante id ultricies. Donec at egestas justo.
<br/><br/>
Vestibulum vel metus odio. Nunc vulputate, tortor nec scelerisque tristique, nibh turpis egestas diam, vel feugiat nunc nisl quis metus. Morbi in lacus eget urna porttitor facilisis id vestibulum diam. Pellentesque malesuada feugiat orci a dapibus. Nam scelerisque nunc orci, posuere semper eros aliquet non. Duis in libero a magna viverra luctus. Integer quis ligula sem. Vivamus neque nibh, convallis eget consectetur vel, condimentum sed odio. Integer ornare interdum orci, quis euismod neque feugiat a. Duis porta nunc urna, vel dignissim velit suscipit eget. Suspendisse aliquam venenatis leo ac laoreet.
<br/><br/>
Proin id lorem at enim posuere semper vitae vel sem. Nulla facilisi. Pellentesque fermentum velit quis convallis iaculis. Integer tristique nunc at libero rhoncus ullamcorper. Nullam vel dignissim diam, non finibus elit. Donec euismod at est eget lobortis. Cras hendrerit nibh diam, at euismod eros elementum sed. Nullam malesuada luctus eros a mollis. Aenean placerat, erat consequat elementum fringilla, urna neque rutrum justo, nec interdum arcu lacus eget risus.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in egestas ipsum, a interdum massa. In et mauris tincidunt, ultricies tortor et, laoreet enim. Suspendisse potenti. Donec sed dapibus eros, sed imperdiet libero. Suspendisse ut hendrerit odio, eget congue ante. Curabitur blandit blandit nulla, ac mattis nisi aliquam eleifend. Nam a placerat est. Duis tincidunt suscipit quam, eget rhoncus purus hendrerit vitae. Proin laoreet commodo sapien, id aliquet ipsum.
<br/><br/>
Proin ut nisi consectetur, porta nunc quis, pellentesque nisl. Nulla maximus rutrum sem sed volutpat. Sed fringilla, ex a dictum rhoncus, dolor risus finibus nunc, ut fermentum mi turpis a est. Nam aliquam nulla ut pellentesque tincidunt. Maecenas quis aliquet elit. Praesent facilisis ut diam vitae pharetra. Fusce vel urna ut augue porta molestie. Integer libero dolor, congue auctor rutrum vitae, porta non libero.
<br/><br/>
Mauris in ante porta, rhoncus sem id, porttitor enim. Aliquam at pretium nibh. Praesent feugiat lacus vel tortor pellentesque aliquet. Ut molestie accumsan nulla, ultrices facilisis lacus ultricies non. Cras vulputate dapibus libero, vehicula porttitor tortor tempus vitae. Curabitur malesuada faucibus erat, ut venenatis sapien hendrerit non. Maecenas bibendum molestie auctor. Nunc tempor eu ante id ultricies. Donec at egestas justo.
<br/><br/>
Vestibulum vel metus odio. Nunc vulputate, tortor nec scelerisque tristique, nibh turpis egestas diam, vel feugiat nunc nisl quis metus. Morbi in lacus eget urna porttitor facilisis id vestibulum diam. Pellentesque malesuada feugiat orci a dapibus. Nam scelerisque nunc orci, posuere semper eros aliquet non. Duis in libero a magna viverra luctus. Integer quis ligula sem. Vivamus neque nibh, convallis eget consectetur vel, condimentum sed odio. Integer ornare interdum orci, quis euismod neque feugiat a. Duis porta nunc urna, vel dignissim velit suscipit eget. Suspendisse aliquam venenatis leo ac laoreet.
<br/><br/>
Proin id lorem at enim posuere semper vitae vel sem. Nulla facilisi. Pellentesque fermentum velit quis convallis iaculis. Integer tristique nunc at libero rhoncus ullamcorper. Nullam vel dignissim diam, non finibus elit. Donec euismod at est eget lobortis. Cras hendrerit nibh diam, at euismod eros elementum sed. Nullam malesuada luctus eros a mollis. Aenean placerat, erat consequat elementum fringilla, urna neque rutrum justo, nec interdum arcu lacus eget risus.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in egestas ipsum, a interdum massa. In et mauris tincidunt, ultricies tortor et, laoreet enim. Suspendisse potenti. Donec sed dapibus eros, sed imperdiet libero. Suspendisse ut hendrerit odio, eget congue ante. Curabitur blandit blandit nulla, ac mattis nisi aliquam eleifend. Nam a placerat est. Duis tincidunt suscipit quam, eget rhoncus purus hendrerit vitae. Proin laoreet commodo sapien, id aliquet ipsum.
<br/><br/>
Proin ut nisi consectetur, porta nunc quis, pellentesque nisl. Nulla maximus rutrum sem sed volutpat. Sed fringilla, ex a dictum rhoncus, dolor risus finibus nunc, ut fermentum mi turpis a est. Nam aliquam nulla ut pellentesque tincidunt. Maecenas quis aliquet elit. Praesent facilisis ut diam vitae pharetra. Fusce vel urna ut augue porta molestie. Integer libero dolor, congue auctor rutrum vitae, porta non libero.
<br/><br/>
Mauris in ante porta, rhoncus sem id, porttitor enim. Aliquam at pretium nibh. Praesent feugiat lacus vel tortor pellentesque aliquet. Ut molestie accumsan nulla, ultrices facilisis lacus ultricies non. Cras vulputate dapibus libero, vehicula porttitor tortor tempus vitae. Curabitur malesuada faucibus erat, ut venenatis sapien hendrerit non. Maecenas bibendum molestie auctor. Nunc tempor eu ante id ultricies. Donec at egestas justo.
<br/><br/>
Vestibulum vel metus odio. Nunc vulputate, tortor nec scelerisque tristique, nibh turpis egestas diam, vel feugiat nunc nisl quis metus. Morbi in lacus eget urna porttitor facilisis id vestibulum diam. Pellentesque malesuada feugiat orci a dapibus. Nam scelerisque nunc orci, posuere semper eros aliquet non. Duis in libero a magna viverra luctus. Integer quis ligula sem. Vivamus neque nibh, convallis eget consectetur vel, condimentum sed odio. Integer ornare interdum orci, quis euismod neque feugiat a. Duis porta nunc urna, vel dignissim velit suscipit eget. Suspendisse aliquam venenatis leo ac laoreet.
<br/><br/>
Proin id lorem at enim posuere semper vitae vel sem. Nulla facilisi. Pellentesque fermentum velit quis convallis iaculis. Integer tristique nunc at libero rhoncus ullamcorper. Nullam vel dignissim diam, non finibus elit. Donec euismod at est eget lobortis. Cras hendrerit nibh diam, at euismod eros elementum sed. Nullam malesuada luctus eros a mollis. Aenean placerat, erat consequat elementum fringilla, urna neque rutrum justo, nec interdum arcu lacus eget risus.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in egestas ipsum, a interdum massa. In et mauris tincidunt, ultricies tortor et, laoreet enim. Suspendisse potenti. Donec sed dapibus eros, sed imperdiet libero. Suspendisse ut hendrerit odio, eget congue ante. Curabitur blandit blandit nulla, ac mattis nisi aliquam eleifend. Nam a placerat est. Duis tincidunt suscipit quam, eget rhoncus purus hendrerit vitae. Proin laoreet commodo sapien, id aliquet ipsum.
<br/><br/>
Proin ut nisi consectetur, porta nunc quis, pellentesque nisl. Nulla maximus rutrum sem sed volutpat. Sed fringilla, ex a dictum rhoncus, dolor risus finibus nunc, ut fermentum mi turpis a est. Nam aliquam nulla ut pellentesque tincidunt. Maecenas quis aliquet elit. Praesent facilisis ut diam vitae pharetra. Fusce vel urna ut augue porta molestie. Integer libero dolor, congue auctor rutrum vitae, porta non libero.
<br/><br/>
Mauris in ante porta, rhoncus sem id, porttitor enim. Aliquam at pretium nibh. Praesent feugiat lacus vel tortor pellentesque aliquet. Ut molestie accumsan nulla, ultrices facilisis lacus ultricies non. Cras vulputate dapibus libero, vehicula porttitor tortor tempus vitae. Curabitur malesuada faucibus erat, ut venenatis sapien hendrerit non. Maecenas bibendum molestie auctor. Nunc tempor eu ante id ultricies. Donec at egestas justo.
<br/><br/>
Vestibulum vel metus odio. Nunc vulputate, tortor nec scelerisque tristique, nibh turpis egestas diam, vel feugiat nunc nisl quis metus. Morbi in lacus eget urna porttitor facilisis id vestibulum diam. Pellentesque malesuada feugiat orci a dapibus. Nam scelerisque nunc orci, posuere semper eros aliquet non. Duis in libero a magna viverra luctus. Integer quis ligula sem. Vivamus neque nibh, convallis eget consectetur vel, condimentum sed odio. Integer ornare interdum orci, quis euismod neque feugiat a. Duis porta nunc urna, vel dignissim velit suscipit eget. Suspendisse aliquam venenatis leo ac laoreet.
<br/><br/>
Proin id lorem at enim posuere semper vitae vel sem. Nulla facilisi. Pellentesque fermentum velit quis convallis iaculis. Integer tristique nunc at libero rhoncus ullamcorper. Nullam vel dignissim diam, non finibus elit. Donec euismod at est eget lobortis. Cras hendrerit nibh diam, at euismod eros elementum sed. Nullam malesuada luctus eros a mollis. Aenean placerat, erat consequat elementum fringilla, urna neque rutrum justo, nec interdum arcu lacus eget risus.
`;


const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute( 'class', 'progress-bar' );
body.append(progressBar);

const calcularPorcentajeScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;

    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;  

}

const scrollBar$ = fromEvent( document, 'scroll' );

const progress$ = scrollBar$.pipe(
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => { 
    progressBar.style.width = `${ porcentaje }%`
});