let botonej1 = document.querySelector("#botonej1")
let elementoej1 = document.querySelector("#elementoej1")
let edad = 16

botonej1.onclick = function () {
    
    if (edad >= 18) {
        elementoej1.textContent = "sos mayor de edad"
    } else {
        elementoej1.textContent = "sos menor de edad"
    }
}

let botonej2 = document.querySelector("#botonej2")
let elementoej2 = document.querySelector("#elementoej2")
let nombre = "Nahuel"

botonej2.onclick = function () {  
    if (nombre=="Nahuel") {
        elementoej2.textContent = "Bienvenido Nahuel ¿como estas?"
    } else {
        elementoej2.textContent = "bienvenido usuario"
    }
}
let botonej3 = document.querySelector("#botonej3")
let elementoej3 = document.querySelector("#elementoej3")
let nombre2 = "Marcos"

botonej3.onclick = function () {  
    if ((nombre=="Nahuel")||(nombre =="Marcos")){
        elementoej3.textContent = "bienvenido" + nombre + "¿como estas?"
    } else {
        elementoej3.textContent = "bienvenido" + nombre 
    }
}
let botonej4 = document.querySelector("#botonej4")
let elementoej4 = document.querySelector("#elementoej4")
let numero = 1

botonej4.onclick = function () {  
    if (numero >0 ){
        elementoej4.textContent = "El numero es positivo"
    } else if (numero <0) {
        elementoej4.textContent = "el numero es negativo"
    } else {
        elementoej4.textContent= "el numero es cero"
    }
}
let botonej5 = document.querySelector("#botonej5")
let elementoej5 = document.querySelector("#elementoej5")
let Edad2 = 6

botonej5.onclick = function () {  
    if ((Edad2 >=6) && (Edad2 <=11)){
        elementoej5.textContent = "Es un niño/a"
    } else if ((Edad2>=12) && (Edad2<=18)) {
        elementoej5.textContent = "Es un adolecente"
    } else if ((Edad2>=19) && (Edad2<=26)){
        elementoej5.textContent= "Es un joven"
    } else if ((Edad2>=27) && (Edad2<=59)) {
        elementoej5.textContent= "Es un adulto"
    }else if ((Edad2>=60)){
        elementoej5.textContent="Es un viejo"
    } else {
        elementoej5.textContent="es muy joven para la vida"
    }
}
let botonej6 = document.querySelector("#botonej6")
let elementoej6 = document.querySelector("#elementoej6")
let dia = "sabado" 

botonej6.onclick =  function () {
    if ((dia=="lunes")||(dia=="martes")||(dia=="miercoles")||(dia=="jueves")|| (dia=="viernes")) {
        elementoej6.textContent="Es un dia laborable"
    } else if ((dia=="sabado") || (dia=="domingo")){
        elementoej6.textContent="es fin de semana"
    }
}
 
let botonej7 = document.querySelector("#botonej7")
let elementoej7 = document.querySelector("#elementoej7")
let contrasenia = "secreto" 

botonej7.onclick =  function () {
    if (contrasenia=="secreto") {
        elementoej7.textContent="acceso concedido"
    } else {
        elementoej7.textContent="acceso denegado"
    }
}
