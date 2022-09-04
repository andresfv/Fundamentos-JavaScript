// Lección 38

const elMayor = (a, b) => {
    return (a > b) ? a : b;
}
console.log(elMayor(20, 15));

//Recordar que se puede simplificar de esta forma
const elMayorSimplificado = (a, b) => (a > b) ? a : b;
console.log(elMayorSimplificado(20, 15));

//Otro ejemplo
const tieneMembresia = (miembro) => (miembro)? '2 Dólares' : '10 Dólares';
console.log(tieneMembresia(true));

//Ejemplo de booleano dentro de arrays y objetos
const amigo = true;
const amigosArr =[
'Peter',
'Tony',
'Dr. Strange',
amigo ? 'Thor': 'Loki',
elMayor(10, 15)
];
console.log(amigosArr);

//Concatenación de operadores ternarios
const nota = 83.5;
const grado = nota >= 95? 'A+': 
              nota >= 90? 'A' : 
              nota >= 85? 'B+': 
              nota >= 80? 'B' : 
              nota >= 75? 'C+': 
              nota >= 70? 'C' : 'F';
              console.log({nota, grado});       