function mayor(valor1 ,valor2){
 let valorMa
 if ( valor1 > valor2 ) {
     valorMa = valor1
 } else {
     valorMa= valor2
 }
   return valorMa
}
function menor ( valor3 , valor4){
    let numeroMe
    if ( valor3 < valor4 ) {
     numeroMe= valor3
    } else {
    numeroMe= valor4
    }
     return numeroMe
}
function igual (valor5 ,valor6){
 let iguales
 if ( valor5 == valor6 ) {
     iguales = "son iguales"
 } else {
     iguales = "son distintos"
 }
   return iguales
}
function porcentaje (valor7){
 let compra 
 compra = valor7 * 0.20
   return compra
}
function modoOscuro(){
    let body = document.querySelector("body")
    body.style.backgroundColor ="black"
    body.style.color="white"
}
function modoClaro (){
    let body = document.querySelector("body")
    body.style.backgroundColor ="white"
    body.style.color="black"
}
