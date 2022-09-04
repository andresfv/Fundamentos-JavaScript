// Lección 79 Constructores multiples protip

// Para este ejemplo el primer constructor permitira enviar los atributos de un objeto sueltos
// y el segundo constructor permitira enviar un objeto completo.

class Persona {

    //Alternativa para tener otro constructor es usar un método estatico
    //Para este ejemplo se usa la destructuración de objetos para no estar llamando persona.nombre, etc...
    static porObjeto({ nombre, apellido, pais }) {
        return new Persona(nombre, apellido, pais);
    }

    //Ojo JS solo permite un constructor por clase
    constructor(nombre, apellido, pais) {
        this.nombre = nombre
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre = 'Melissa';
const apellido = 'Flores';
const pais = 'Honduras';

const fher = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica'

}

const persona1 = new Persona(nombre, apellido, pais);
const persona2 = Persona.porObjeto(fher);//Para usar otro 'constructor' se usa un método que realice una función parecida

persona1.getInfo();
persona2.getInfo();