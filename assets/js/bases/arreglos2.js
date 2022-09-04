//Leccion 23
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono Cross'];
console.log('Largo:', juegos.length);//4

let primerElemento = juegos[0];
let ultimoElemento = juegos[juegos.length - 1];

console.log({primerElemento, ultimoElemento});

juegos.forEach((elemento, indice, arr) =>{//Para revisar un array
console.log({elemento, indice, arr}); 
});

let nuevaLongistud = juegos.push('F-Zero');//Para agregar un elemento al array al final y devuelve el nuevo length
console.log({nuevaLongistud, juegos});

nuevaLongistud = juegos.unshift('Breath Of Fire'); //Agrega un elemento al principio del array y devuelve el nuevo length
console.log({nuevaLongistud, juegos});


let elementoBorrado = juegos.pop();//Borra el ultimo elemento y devuelve el elemento borrado
console.log({elementoBorrado, juegos});

let posicion = 1;
let juegosBorrados = juegos.splice(posicion, 2); //Borra elementos desde el primero hasta el número dado en parámetro y devuelve los elementos borrados
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid');//Busca posición de un elemento, si devuelve -1 quiere decir que no lo encontró, OJO es case sensitive
console.log(metroidIndex);


