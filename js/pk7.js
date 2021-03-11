console.log('***************************');
console.log('Condicionales');
console.log('***************************');

// Una pregunta o un cuestionamiento
// En boolean --> true or false

// Operadores condicionales o lógicos
// > < >= <= or --> | and --> &

// var calificacion = 7;

// // pregunta --> si la calif es mayor a 6; si es verdadero entra a código y lo muestra en consola
// if (calificacion > 6) {
//     console.log("aprobado");
// }else{
//     console.log("reprobado");
// }

/* 
Ejercicio:
6 aprobó
7 bien
8 Bueno
9 excelente */

// var calif = 9;

// if (calif > 6) {
//     console.log("Estas aprobado");
//     // Entonces sí --> else if
// } else if (calif >= 7) {
//     console.log("Bien");
// } else if (calif >= 8) {
//     console.log("Bueno");
// } else if (calif >= 9) {
//     console.log('Excelente');
// }else{
//     console.log("Estas reprobado");
// }

// Ejercicio 2
// Realizar una interfaz que permita preguntarle al crush que si quiere andar conmigo.
/* Opciones: input, prompt, select y la mejor un confirm */

// var respuesta = confirm("Quieres ser mi novi@??");
// console.log(respuesta);

// Este if es el más rápido en tiempo de ejecución pues ya es boolean por naturaleza/fijo y no es necesario comparar
// if (respuesta) {
//     console.log("❤︎❤︎❤︎❤︎");
// }else{
//     console.log("☹︎☹︎☹︎☹︎");
// }

// De esta manera es redundante por el valor que trae la variable respuesta
// console.log(respuesta);
// if (respuesta == true) {
//     console.log("❤︎❤︎❤︎❤︎");
// }else{
//     console.log("☹︎☹︎☹︎☹︎");
// }


// Ejercicio 3
// Boton que llame a la función que evalua la calificación que ingreso y me mande el mensaje en consola

console.log('**********************************');
console.log('Ejecicio 3 Boton-Función');
console.log('**********************************');

// Función


function evaluar() {
    var calif = prompt("¿Cuál es la calificación?");
    if ((calif >= 6) & (calif < 7)) {
        document.getElementById("calif").innerText = `Tu calificación es: ${calif}`, 'Estas aprobado';
        // console.log("Estas aprobado");
        // Entonces sí --> else if
    } else if ((calif >= 7) & (calif < 8)) {
        // console.log("Bien");
        document.getElementById("calif").innerText = 'Bien';
    } else if ((calif >= 8) & (calif < 9)) {
        // console.log("Bueno");
        document.getElementById("calif").innerText = 'Bueno';
    } else if (calif >= 9) {
        // console.log('Excelente');
        document.getElementById("calif").innerText = 'Excelente';
    }else{
        // console.log("Estas reprobado");
        document.getElementById("calif").innerText = 'Estas reprobado';
    }
    
}








