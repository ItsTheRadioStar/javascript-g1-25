let arregloNumerico = [1, 2, 873, 64, 15, -6, 3243.234]
let arregloCadenas = ["cesar", "martin", "alberto"]

let nombre1 = "cesar"
let nombre2 = "martin"
let nombre3 = "alberto"

let arregloCadenasVariables = [nombre1, nombre2, nombre3]

const arrayMixto = [390, "alan", true, {
    nombre: 'pans',
    raza: 'pekines'
}, () => {
    console.log('function')
}]

let arregloCombinado = [arregloNumerico, arregloCadenas, arregloCadenasVariables, arrayMixto]

function mostrarListaNombre(){
    let htmlListaNombres = ''

    arregloCadenas.forEach((nombre)=>{
        htmlListaNombres += `<li>${nombre}</li>`
    })
    
    document.getElementById('listaNombres').innerHTML = htmlListaNombres
}

function mostrarListaNumeros(){
    let htmlListaNumeros = `<li> ${arregloNumerico.join('</li><li>')} </li>`;
    document.getElementById('listaNumeros').innerHTML = htmlListaNumeros
}

let elementos = []
// Agregar elementos al final del arreglo
elementos.push('uno')
elementos.push('dos', 'tres', 'cuatro')
// Eliminar elemento al final
elementos.shift()
console.log(elementos)
// Agregar elemento al principio
elementos.unshift('-1', 'cero', 'uno')
console.log(elementos)
// Eliminar un elemento del final
elementos.pop()
elementos.pop()
console.log(elementos)

// Agregar
// push() - al final
// unshift() - inicio

// Eliminar
// pop() - al final
// shift() - al inicio
