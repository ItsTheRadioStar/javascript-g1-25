// los valores se asignan al momento de ser invocada la función
function sumar(numeroA, numeroB, otroNumero = 0){
    let resultado;
    resultado = numeroA + numeroB + otroNumero
    console.log('SUMA', resultado)
}

let a = 5
const B = 500

sumar(a, B)
sumar(a, B, 5)

function otraOperacion(c, d){
    return c+d
}
// Podemos enviar resultado de operaciones y otras operaciones
sumar(10, B/20, otraOperacion(3,6))
