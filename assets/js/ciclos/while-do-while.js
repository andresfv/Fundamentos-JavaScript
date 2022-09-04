// Lección 40

const carros= ['Ford', 'Kia', 'Honda', 'Toyota'];

console.warn( 'While');
let i = 0;
while (i < carros.length) {
    console.log( carros[i]);
    i++;
}

//Se pueden usar los codigos;
//"break" para terminar un ciclo
//"continue" para continuar un ciclo

console.warn( 'Do While');
let j = 0;

do {
    console.log(carros[j]);
    j++;    
} while (carros[j]);//Mientras carros[] en posicion j tenga valor se va a repetir 