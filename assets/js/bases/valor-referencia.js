// Leccion 32
//Los primitivos realizan una copia del valor que se les esta asignando.
let a = 10;
let b= a;
a = 30;
console.log({ a, b });

//Pero no es lo mismo con los objetos, estos se ven como referencias hacia la variable original y si la original cambia las copias también.
let juan = {nombre: 'Juan'};
let ana = juan;
ana.nombre = 'Ana';

console.log({juan, ana});

//Sin importar si se usa un función para cambiar su valor
const cambiaNombre = (persona) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );
console.log({peter, tony});
// Este ejemplo imprime lo siguiente :
// peter: {nombre: 'Tony'}
// tony: {nombre: 'Tony'}

//Si se desea romper esta relación referencial y poder realizar una copia de un objeto se puede utilizar el operador "Spread" (...)
let juan2 = {nombre: 'Juan'};
let ana2 = { ...juan2 };//Usando Spread
ana2.nombre = 'Ana';
//Nota: el operador Spread se diferencia del Rest según el lugar en el que se use, si se utiliza como atributo
//se trata de un operador Rest y si se usa en otro lugar se trata de un operador Spread.

console.log({juan2, ana2});

const cambiaNombre2 = ({ ...persona}) =>{//Asi se usa Spread en una funcion de flecha
    persona.nombre = 'Tony';
    return persona;
}

let peter2 = { nombre: 'Peter' };
let tony2 = cambiaNombre2( peter2 );

console.log({peter2, tony2});

//Misma problematica pero usando arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = frutas;
otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });
//Sucede lo mismo, las copias se modifican si el original cambia

//Solución usando Spread en arreglos
const frutas2 = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas2 = [ ...frutas2 ];
otrasFrutas2.push('Mango');
console.table({ frutas2, otrasFrutas2 });

//Solución usando Slice, pero es un poco más lento
const frutas3 = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas3 = frutas3.slice() ;
otrasFrutas3.push('Mango');
console.table({ frutas3, otrasFrutas3 });

//Permite medir el tiempo
console.time('timer');
console.timeEnd('timer');