// Lección 78 Singleton

class Singleton {

    static instancia; //Las variables sin inicializar en js son undefined
    nombre = '';

    constructor(nombre = '') {

        // Ejemplo sobre como dar valor binario a una variable undefined
        // const a = undefined;
        // console.log(a); undefined
        // console.log(!a); true
        // console.log(!!a); false

        
        // Asi se usa un singleton, se trata de crear una validación que compruebe 
        // si el objeto ya tiene un valor que lo retorne y no asigne un nuevo valor.
        // Además se aconseja trabajar con binarios para comprobar si una instancia es nula
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        // Este return es opcional ya que se realiza por defecto
        // return this; 
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);