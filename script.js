
let nombre
let articulo
let continuar = true


function saludar() {
    do {
    nombre = prompt ("¿Cual es tu nombre?")
    }while (nombre == "") {
    alert("Bienvenido" + " "+ nombre + " " + "te deseamos buenas olas!")
}}

function addToCart (){
do{
    articulo = prompt("¿Que articulo queres agregar a tu carrito? tabla de surf, traje de neopreno o parafina")
} while (articulo != "tabla de surf" && articulo !="traje de neopreno" && articulo != "parafina") 
return articulo; 
}
function addedCorrect (){
    alert ("agregaste correctamente el articulo"+" " + articulo)
}

saludar()
while (continuar) {
    addToCart()
    switch(articulo) {
        case "tabla de surf":
            alert ("Los colores de nuestra"+ " " + articulo + " "+ "son siempre blancas")
            break;
        case "traje de neopreno":
            alert ("Tenemos los mejores"+" " + articulo + " " + "RipCurl del mercado")
            break;
        case "parafina":
            alert ("Esta" + " " + articulo + " " + "se adhiere perfecto a nuestras tablas de surfing ")
            break;
            default:
        }
    addedCorrect()
    continuar = confirm ("¿agregamos mas articulo?")
} 








