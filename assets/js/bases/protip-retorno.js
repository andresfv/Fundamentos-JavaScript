// Leccion 28
//Protip 1
// function crearPersona(nombre, apellido){
//     return{
//         nombre: nombre,
//         apellido: apellido
//     }
// }

// const persona = crearPersona('Andrés', 'Fallas');
// console.log(persona);

//la función anterior se puede simplificar de la siguiente manera
//javascript da a las llaves el nombre de las variables por defecto, se coloca entre parentesis para evitar que javascript confunda el codigo
const crearPersona = (nombre, apellido) => ({ nombre, apellido })


const persona = crearPersona('Andrés', 'Fallas');
console.log(persona);

//Protip 2
function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(19, false, 'Hola');

//Las funciones de flecha no pueden usar la palabra "arguments" ya que es unica de las funciones tradicionales
//Para puder tener el mismo resultado que la funcion anterior pero con una función de flecha
//... Parametros rest encapsula todos los argumentos enviados en un array, volviendo dínamica la cantidad de argumentos que se puedan enviar a una funcion
const imprimeArgumentos2 = (...args) => { 
    console.log(args);
}
imprimeArgumentos2(10, true, 'Hello');

//Se debe considerar que después de un parámetro rest no puede venir ningún otro argumentos, para eso se debe enviar antes y se maneja por separato a la variable rest
const imprimeArgumentos22 = (edad, ...args) => { 
    console.log(edad, args);
}
imprimeArgumentos22(33, 10, true, 'Hello');

//Si se desea retornar un array se puede hacer lo siguiente
const imprimeArgumentos3 = (...args) => { 
    return args;
}

//De esta forma se evita realizar todo el trabajo de declarar y asignar cada posicion del array en una variable
//generando de forma automática una variable con el valor de cada posición del array de argumentos
const [edad, soltero, saludo] = imprimeArgumentos3(33, true, 'Hello');
//Se colocan llaves {} para visualizarlo mejor en el console.log
console.log({ edad, soltero, saludo });

//También se pueden crear objetos de la misma forma solo que se usan llaves {}
const { apellido } = crearPersona('Andrés', 'Fallas');
console.log({ apellido });

//Si se desea cambiar el nombre del atributo se puede hacer lo siguiente
const { apellido: nuevoApellido } = crearPersona('Andrés', 'Fallas');
console.log({ nuevoApellido });//se cambió apellido por nuevoApellido



//Protip 3 Forma sencilla para imprimir un objeto con sus atributos
const tony = { 
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    // edad: 40,
    trajes: ['Mark I', 'Mark V', 'HulkBuster'], //javaScript soporta dejar comas sueltas
};

//De esta forma es posible separar cada atributo de un objeto para tener acceso a el de una forma más limpia
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 31, trajes }) => { //igualar un parametro a un valor significa darle un valor por defecto en caso de null
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades(tony);