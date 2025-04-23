// Variables globales
var numero1 = 5
numero2 = 4
nombre = 'Jordan'

// Funciones globales
function multiplicar(){
    return numero1 * numero2
}
console.log( multiplicar() )

function getMarcador(){
    let numero1 = 10
    numero2 = 7
    nombre = 'el equipo contrario'

    function agregar(){
        return nombre + ' anotó ' + (numero1 + numero2)
    }

    return agregar()
}

console.log(nombre)
console.log(getMarcador())
console.log(nombre)
