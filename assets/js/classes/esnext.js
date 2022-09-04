// Lección 77

class Rectangulo {
    // Se debe usar # para declarar una variable como privada 
    // y debe ser llamada así en todos lo lugares donde se use
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    // También se pueden crear métodos privados
    #calcularArea() {
        console.log(this.#area * 2);

    }
}

const rectangulo = new Rectangulo(10, 15);
// Una variable privada no puede ser modificada desde fuera de su clase
// rectangulo.#area = 100;
rectangulo.#calculaArea();
console.log(rectangulo);