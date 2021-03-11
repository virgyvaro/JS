// Métodos o funciones pero se deben de llamar por FUNCIONES
// VOID = no retorna producto específico

// Alert, onclick, prompt es un método Nativo que lo trae el objeto global = window

// Visualiza un mensaje ya establecido
// alert("Bienvenidas al curso");

// Sirve para interactuar con el usuario y que ingrese datos
// prompt("Ingresa tu edad");


function saludar(){
    alert("Bienvenidas a Escuela de Código");
}

// var edad = prompt("Ingresa la edad");
// console.log("La edad que ingreso el usuario es: ", edad);

// var num1 = prompt("Ingresa el primer núnero");
// var num2 = prompt("Ingresa el segundo número");

// var suma = parseInt(num1) + parseInt(num2);

// console.log("Tu resultado de la suma es: ", suma);

function suma() {
    var num1 = prompt("Ingresa el primer núnero");
    var num2 = prompt("Ingresa el segundo número");
    var suma = parseInt(num1) + parseInt(num2);
    console.log("Tu resultado de la suma es: ", suma);
}

function resta() {
    var num1 = prompt("Ingresa el primer núnero");
    var num2 = prompt("Ingresa el segundo número");
    var resta = parseInt(num1) - parseInt(num2);
    console.log("Tu resultado de la resta es: ", resta); 
}

function multi() {
    var num1 = prompt("Ingresa el primer núnero");
    var num2 = prompt("Ingresa el segundo número");
    var multi = parseInt(num1) * parseInt(num2);
    console.log("Tu resultado de la multiplicación es: ", multi);   
}

function divi() {
    var num1 = prompt("Ingresa el primer núnero");
    var num2 = prompt("Ingresa el segundo número");
    var div = parseInt(num1) / parseInt(num2);
    console.log("Tu resultado de la división es: ", div);
}

// Este método o función se utiliza para cuando queremos eliminar algo y darle al usuario a elegir con un si o no(boolean) y se ve en estructuras de control
var valor = confirm("¿Quiéres seguir con la operaciones?");
console.log(valor);