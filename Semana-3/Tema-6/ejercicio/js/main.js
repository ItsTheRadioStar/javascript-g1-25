const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

// agregarElemento
/*
descripcion
calorias
carbohidratos
proteina
*/
const validaciones = {
    nuevoElemento: [],
    valores: [],
    descripcion() {
        this.nuevoElemento[0] = document.getElementById('descripcion').value
        return document.getElementById('descripcion').value
    },
    calorias() {
        this.nuevoElemento[1] = parseInt(document.getElementById('calorias').value)
        return parseInt(document.getElementById('calorias').value)
    },
    carbohidratos() {
        this.nuevoElemento[2] = parseInt(document.getElementById('carbohidratos').value)
        return parseInt(document.getElementById('carbohidratos').value)
    },
    proteina() {
        this.nuevoElemento[3] = parseInt(document.getElementById('proteina').value)
        return parseInt(document.getElementById('proteina').value)
    },
    ok() {
        if((this.descripcion() && this.calorias() && this.carbohidratos() && this.proteina())){
            this.valores.push(this.nuevoElemento)
            return true
        }
        return false
    },
    mensaje(texto) {
        console.log(texto)
    }
}

function agregar() {
    // '<tr><td>'+nuevaFila.join('</td><td>')+'</td></tr>'

    if (validaciones.ok()) {
        // validaciones.valores.push(nuevaFila)
        // let laTablaActual = document.getElementById('contenidoTabla').innerHTML
        // validaciones.valores.push([validaciones.nuevoElemento])
        // let laTabla = document.getElementById('contenidoTabla')
        
        // laTabla.innerHTML = '<tr><td>' + validaciones.valores.join('</td><td>') + '</td></tr>'
        let html = ''
        validaciones.valores.map((row)=>{
            html += '<tr><td>'+row.join('</td><td>')+'</td></tr>'
        })

        let sumaCalorias = 0
        let sumaCarbo = 0
        let sumaProteina = 0
        validaciones.valores.map((row)=>{
            sumaCalorias += row[1]
            sumaCarbo += row[2]
            sumaProteina += row[3]
        })

        document.getElementById('contenidoTabla').innerHTML = html
        validaciones.mensaje('Todo correcto')
        document.getElementById('totalCalorias').innerText = sumaCalorias
        document.getElementById('totalCarbohidratos').innerText = sumaCarbo
        document.getElementById('totalProteina').innerText = sumaProteina
    } else {
        validaciones.mensaje('Ingrese todos los datos')
    }
}

