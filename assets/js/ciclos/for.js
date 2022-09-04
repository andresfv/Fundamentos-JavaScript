// Leccion 41
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

//Sintaxis basica
console.warn('For tradicional');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

//Para recorrer arrays
console.warn('For in');
for (let i in heroes) {
    console.log(heroes[i]);
}

//Ideal para recorrer lista
console.warn('For of');
for (let heroe of heroes) {
    console.log(heroe);
}

//Nota, los nombres de variables 'i' son meramente por gusto, nada especial
