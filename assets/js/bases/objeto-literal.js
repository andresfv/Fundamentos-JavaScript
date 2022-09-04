// Leccion 24

//Asi se crea un objeto, se asemeja a Json
//El orden de las propiedades es cambiado de forma alphabetica automaticamente
const personaje = { //Si se crea un objeto como constante esta aún va a permitir realizar modificaciones a sus atributos
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo:false,
    edad:40,
    coords:{//Se puede crear un objeto dentro de otro
        lat:34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],//Se pueden agregar arreglos
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity Wars'//Esta es la forma de agregar un espacio en una propiedad pero no es buena practica, es mejor usar el camelCase
};

console.log(personaje);
console.log('Nombre ', personaje.nombre);
console.log('Nombre ', personaje['nombre']);//Esta es otra forma de acceder a un atributo de un objeto
console.log('Edad: ', personaje.edad);
console.log('Coordenadas:', personaje.coords);
console.log('Latitud:', personaje.coords.lat);

//Numero de trajes que tiene Ironman
console.log('# de Trajes Ironman:', personaje.trajes.length);
console.log('Ultimo traje Ironman:', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);//Otra forma de mostrar el valor de una propiedad de un objeto
console.log('Última Película', personaje['ultima-pelicula']);//Se debe de usar esta forma para obtener el valor de una variable con espacio


//----------------------------------------------------Más detalles---------------------------------
// Leccion 25
delete personaje.edad; //Permite borrar todo un atributo de un objeto
console.log(personaje);

//Se puede crear un atributo para un objeto en caliente
personaje.casado = true;
console.log(personaje);

//Crea un arreglo con dos valores para poder imprimirlos y visualizarlos mejor
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Protege la modificación de atributos DIRECTOS de un objeto
//Los objetos const solo protegen de ser sobreescritos más no sus propiedades, en este ejemplo "personaje" es const
Object.freeze(personaje); 
personaje.dinero = 9999999999;//No se va a crear debido a instruccion freeze
personaje.direccion.ubicacion = 'Costa Rica';//Sin embargo aun se pueden cambiar propiedades de sub objetos
console.log(personaje);

//Permite imprimir las propiedades de un objeto
const propiedades = Object.getOwnPropertyNames(personaje);

//Permite imprimir los valores de las propiedades de un objeto
const valores = Object.values(personaje);
console.log({propiedades, valores});
