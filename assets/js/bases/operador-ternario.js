// Lección 37

const dia = 1;
const horaActual = 11;

let horaApertura;
let mensaje;
/*
if (dia === 0 || dia === 6) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Día entre semana');
    horaApertura = 11;
}
*/

/*
if (horaActual >= horaApertura) {
    mensaje = 'Está abierto';
} else {
    //Se usa back tick '`', el atajo es ALTGR + ]
    //Esta es la forma actual en como se concatenan valores a un String
    mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura}`;
}

console.log({horaApertura, mensaje});
*/

//---------------Lo anterior se puede simplificar de la siguiente forma--------------///
//Operador ternario o if de una linea
//Los parentesis no son obligatorios pero es buena práctica agregarlos
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

mensaje = ( horaActual >= horaApertura )? 'Está abierto': `Está cerrado, hoy abrimos a las ${ horaApertura}`;

console.log({horaApertura, mensaje});