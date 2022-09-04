// Leccion 20
let nombre = 'Peter Parker';
console.log( nombre );

nombre = 'Ben Parker'; //Comillas simples y sin declarar variable
console.log( nombre );

nombre = "Tía May";//Comillas dobles
nombre = `Tía May`; //Backtip

console.log( typeof nombre);

nombre = 123; //Las variables pueden cambiar de tipo según sea su valor
console.log( typeof nombre);

let esMarvel = true;//Debe ser con letras minusculas no True ya que no lo reconoce
console.log( typeof esMarvel);

let superPoder;
console.log( typeof superPoder);

let superNull = null;
console.log( typeof superNull);//Null es un objeto

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1);
console.log( symbol1 === symbol2);//Ambas variables tienen el mismo valor pero al hace la comprobación el resultado es falso
//Todas las variables son objects excepto los primitivos
//En javascript se acostumbra nombrar las variables como cameCase que significa primera palabra en minuscula y las demás primeras letras en maysucula.