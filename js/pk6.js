console.log("***********************");
console.log("DOM");
console.log("***********************");

// Punto de entrada a html es la funcion document. [hijos]

// para una colección de objetos basados en un elemento específico ==> dirección?
// document.getElementsByTagName

// Obtiene el valor de un objeto si este tiene atención actualmente por medio de un boolean
// document.hasFocus

// Cuando un evento está manipulandose ==> Se dispara cuando el objeto pierde la atención de entrada.
// document.onblur

// var elementoDesdeHtml = document.getElementById("objetivo");
// console.log(elementoDesdeHtml);

// elementoDesdeHtml.innerHTML = "cambio";
// elementoDesdeHtml.classList.add("cambio");

function cambio() {
    var elementoDesdeHtml = document.getElementById("objetivo");
    // console.log(elementoDesdeHtml);
    elementoDesdeHtml.innerHTML = "cambio";
    elementoDesdeHtml.classList.add("cambio");
}


// Se necesita que un area designada tenga una imagen y crear un evento (onclick) se cambie la imagen, debe llevar un retardo no cambio de golpe

// Funcion para cambiar imagen

function imagen() {
    var elementoImagenHtml = document.getElementById("img");
    // elementoImagenHtml.classList.add("estilo");

    // Toggle ==> es una función que sirve como un switch eéectrico que nos permite jugar con el valor true or false (valor boolean). 
    elementoImagenHtml.classList.toggle("estilo");
}


