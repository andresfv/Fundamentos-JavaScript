// Leccion 22
// const arr = new Array(10); //Forma vieja de crear un array 
// const arrr = []; //Forma de crear arreglo más usada;

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log(videoJuegos);

console.log(videoJuegos[0]);

//Javascript permite crear arrays que almacene valores de distintos tipos
//Tambien permite dejar el ultimo elemento con "," (coma) y es considerado buena practica
let arregloCosas = [
true,
123,
'Andrés',
1+2,
function(){},
()=>{},
{a:1},
['X', 'Megaman', 'Zero', 'Dr.Light', ['Dr.Willy', 'Woodman']]
];

console.log(arregloCosas);

console.log(arregloCosas[7]);

console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4]);
console.log(arregloCosas[7][4][1]);