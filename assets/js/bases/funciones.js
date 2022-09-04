// Leccion 26
// Diferencias entre una funcion y un método
// Una funcion nos permite encapsular un codigo para ser reutilizado
// Un método es una función que esta dentro de un objeto

// Se recomienda que la creación de una función esté antes de una llamada

//Función tradicional
function saludar(nombre) {
    console.log('Hola ' + nombre);
}
saludar('Andrés');


// Función anonima, se llama así porque no tiene nombre
const saludar2 = function (nombre) {
    console.log('Hola ' + nombre);
}
saludar2('Thor');

//Se puede utilizar parametros sin ser creados
function saludar3() {
    console.log(arguments);//hace referencia a todos los argumentos (parámetros) enviados
}
saludar3('Thor', 'Trueno', 'Martillo');

//Funcion de flecha
const saludarFlecha = () => {
    console.log('Hola Flecha');
}
saludarFlecha();

//Funcion de flecha con argumentos, los parentesis () son opcionales, por lo que en este caso no se usan, PERO es mejor usarlos ya que es buena practica
const saludarFlecha2 = (nombre) => {
    console.log('Hola', nombre);
}
saludarFlecha2('AntMan');

// Leccion 27
//Funcion con return
function sumar(a, b) {
    return a + b;
}

console.log(  sumar(24, 6)  );

//Funcion de fecha con return
const sumar2 = (a, b) => {
    return a + b;
}

console.log(   sumar2(73, 7)  );

//Funcion de flecha simplificada, esta solo se puede utilizar cuando en el método solo se va a ejecutar un return o sea una sola linea de código
const sumar3 = (a, b) => a + b;
console.log(  sumar3(62, 8)  );

//Ejercicio funcion de flecha simplificada
const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());