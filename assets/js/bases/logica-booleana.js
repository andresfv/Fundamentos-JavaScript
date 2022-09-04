// Leccion 35

const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

//Como funciona la negación '!' antes de valor boolean
console.warn('Not o la negación');
console.log( true );//true
console.log( !true );//false
console.log( !false );//true

console.log( !regresaFalse() );//true

//Uso de And
console.warn('And');
console.log(true && true); //true
console.log(true && !true); //false
console.log(true && !false); //true


console.log('===========');
//En un AND con funciones como criterio en donde su primer criterio devuelve FALSE no se ejecutará la segunda función criterio,
//solo ejecutara la primer funcion
console.log(regresaFalse() && regresaTrue()); //false

//Uso de Or
console.warn('Or');
console.log(true || false); //true

//En un OR con funciones como criterio en donde su primer criterio devuelve TRUE no se ejecutará la segunda función criterio,
//solo ejecutara la primer funcion
console.log(regresaTrue() || regresaFalse()); //true


// Leccion 36
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

//USANDO AND
//Toda asignación de varios elementos en una misma variable toma el ultimo valor siempre y cuando todos sean true
const a1 = true && 'Hola' && 150;
console.log(a1);

//Solo toma el valor de false
const a2 = false && 'Hola' && 150;
console.log(a2);

//Misma regla se aplica si se trata de valores de un mismo tipo
const a3 = 'Hola' && 'Mundo';
console.log(a3); //Mundo

//USANDO OR
const o1 = soyFalse || 'Hola' || 150;
console.log(o1);//Hola

//Or solo aceptara asignaciones con valor true, undefined y null no tienen valor
const o2 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso' || true;
console.log(o2);//Ya no soy falso

// Nota: No se recomienda hacer más de 3 criterios en un And u Or, es mala práctica