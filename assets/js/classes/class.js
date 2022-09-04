// Lección 72
//Así se define una clase en js
//Siempre devuleve la instancia del objeto
//Las clases por defecto tienen el 'use strict'
class Persona {

    //Lección 75 statics
    //Permite utilizar una variable u objeto sin instanciar
    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log( this.nombre );//Será undefined
        console.log( 'Hola a todos, soy un método statico' );
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo ++;
    }

    //Leccion 74 Sets y Gets
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre} es ${ this.comida }`;
    }

    //Leccion 73
    //Así se crea un método dentro de una clase
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    //Tambien se puede llamar un método dentro de otro método
    miFrase() {
        //Para llamar otro método de otros scope se debe usar el 'this'
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigo spiderman');
const ironman = new Persona('Tony Stark', 'Irnonman', 'Yo soy Ironman');
// console.log(ironman);

spiderman.miFrase();
// ironman.miFrase();
//Cosas que hace mal javascript:
//Permite llamar y dar valor a un método set que no existe en el objeto
// spiderman.nemessis = 'El Duente Verde';

//Así se usa un set, no se asigna el valor por parámetro como si pasa en java
spiderman.setComidaFavorita = 'El pie de cereza de la tía May';

//Así se llama un get, no se usan () como si pasa en java
// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);
// Persona._conteo = 2;
console.log('Conteo statico', Persona._conteo );
console.log( Persona.conteo );
Persona.mensaje();
