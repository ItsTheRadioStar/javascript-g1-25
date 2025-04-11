let arreglo_meses = ['Enero', 'Febrero', 'Marzo', 'Abril']

// Recorrer el arreglo
    // x Tomar el elemento 'Enero'
    // x Cortar el string con el nombre del mes 'Ene'
    // x Guardarlo en una variable 'nombre_corto'
    // x almacenar 'nombre_corto' en el arreglo 'salida'

// Devolver el resultado

function cortarMes(listaMeses = []){
    let salida = []

    listaMeses.forEach((mes, indice)=>{
        let nombre_corto = mes.slice(0,3)
        salida[indice] = nombre_corto
        // salida.push(nombre_corto)
    })

    return salida
}

console.log(cortarMes(arreglo_meses));

// Resultado
// Ene, Feb, Mar
