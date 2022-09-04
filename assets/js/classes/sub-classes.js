// Lección 76 Extends, subclases

class Persona {

    //Lección 75 statics
    //Permite utilizar una variable u objeto sin instanciar
    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);//Será undefined
        console.log('Hola a todos, soy un método statico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    //Leccion 74 Sets y Gets
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
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

class Heroe extends Persona {

    clan = 'Sin clan';
    constructor(nombre, codigo, frase) {
        //El super es necesario al heredar y siempre debe ir primero antes de usar 'this'
        super(nombre, codigo, frase);
        this.clan = 'Avengers'
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        //Así usamos el método heredado del padre
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigo spiderman');
console.log(spiderman);
spiderman.quienSoy();