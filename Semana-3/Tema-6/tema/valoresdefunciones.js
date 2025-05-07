function sumar(numA, numB){
    return numA + numB
}

function mostrarResultado(numA, numB, suma){
    let resultado = 0
    // Validamos que suma sea una función
    if(typeof suma === 'function'){
        resultado = suma(numA, numB)
    }
    console.log('El resultado de la suma de', numA, '+', numB,'es', resultado)
}

// mostrarResultado(5,6, sumar)

function cadaLetra(letra, indice){
    console.log(indice, letra)
}

let arreglo = ['A','B','C']

arreglo.forEach(cadaLetra)
let filtrado = arreglo.filter((value)=>value != 'B' ? 'sí' : 'no')

console.log(filtrado)
