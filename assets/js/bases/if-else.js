// Leccion 33
const hoy = new Date();
//getDay permite obtener el número del día de una fecha, en este caso se usa la fecha actual
let dia = hoy.getDay();
// 0 : Domingo, 1 : Lunes, 2 : Martes....
console.log({ dia });

// Usar un igual "=" significa asignar un valor, 
// doble igual "==" significa comparar sin importar el tipo de variable 
// y triple igual "===" permite comparar respetando el tipo de dato
if( dia === 0 ){ 
    console.log('Hoy es Domingo!!!');
}else{
    console.log('No es Domingo');
}


//Leccion 34
//Ejercicio, obtener nombre del día sin usar if else ni switch
const nombreDia = dia =>{
const semanaArray= ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
return semanaArray[dia] || 'un día no definido';
}
console.log('Hoy es ' + nombreDia(dia));
