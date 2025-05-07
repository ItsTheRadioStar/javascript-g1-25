function saludar(){
    console.log('Hola')
}
let total = 0

function cortarCadena(cadena){
    return cadena.split('.')
}

function sumaGeneral(nuevoValor){
    total += nuevoValor
}

// console.log(cortarCadena('A.B.C'))
// console.log(cortarCadena('ABC'))

// sumaGeneral(2)
// sumaGeneral(20)
// sumaGeneral(-47)
// sumaGeneral(25)

// console.log(total)

// Manejando arreglos con POO
function interseccion(a,b){
    var resultado = []

    for(var i =0; i < a.length; i++){
        for(var j=0; j<b.length; j++){
            if(a[i] === b[j]){
                resultado.push(a[i])
                break
            }
        }
    }
    return resultado.sort()
}
const A = [2,3]
const B = [1,2,3,4,5]

console.log(interseccion(A, B))
