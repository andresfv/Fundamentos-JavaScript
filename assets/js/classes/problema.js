//Lección 71

const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        //Se utiliza this para hacer referencia a variables dentro del mismo objeto, de otro modo da error.
        console.log(`Nombre ${this.nombre} - edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        //Se utiliza this para hacer referencia a variables dentro del mismo objeto, de otro modo da error.
        console.log(`Nombre ${this.nombre} - edad: ${this.edad}`);
    }
}

//fher.imprimir();

//Así se creaba un constructor
//Esta forma ya no se usa, solo para navegadores muy viejos
function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

//Así se instancia un objeto en js
const maria = new Persona('María', 18);
const yuliana = new Persona('Yuliana', 22);
console.log( maria );
console.log( yuliana );
maria.imprimir();
yuliana.imprimir();