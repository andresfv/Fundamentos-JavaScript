
//  console.log('Hola Mundo');

let a = 10;
let b = 10;

let x = a + b;
var f = 10; //Las variables var ya no se usan ya que se guardan a nivel global de window y no muestra algunos errores importantes, ver leccion 14 para más detalles

let c = 'Hola ';
let d = 'Spiderman';

const saludo = c + d; //Variables con valor que no puede cambiar, parecido a las variables final en java.

console.log(x);
//console.info('Esto es un mensaje de información');
//console.warn('Esto es un mensaje de precaución');
//console.error('Esto es un mensaje de error');

//Técnica para mostrar nombre de variable junto con su valor, ideal para hacer debug
//console.log({a});

//Edicion de css
//console.log('%c Mis variables', 'color:white; font-weight: bold');

//Tecnica para imprimir varias variables
//console.table({a, b, x});

//Leccion 14
var miNombre ='Andrés'; //Al usar "var" se genera una variable global, esto es mala practis 