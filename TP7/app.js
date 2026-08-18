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
let nombre = "Nahuel"

botonej3.onclick = function () {  
    if ((nombre=="Nahuel")||(nombre =="Marcos")){
        elementoej3.textContent = "bienvenido"+ nombre + "¿como estas?"
    } else {
        elementoej3.textContent = "bienvenido" + nombre 
    }
}