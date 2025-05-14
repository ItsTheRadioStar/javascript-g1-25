function cargaInicial() {
    console.log('Mensaje inicial')
    // let elMensaje = document.getElementById('mensaje')
    // if (elMensaje) {
    //     console.log('::: objeto (elMensaje) null', elMensaje == null)
    //     elMensaje.innerText = 'Hola desde el body onload'
    // } else {
    //     console.error('No se encuentra el elemento "elMensaje"');
    // }
}

function ocultarSinClaseCss(){
    let todos = document.querySelectorAll('#saludo span')
    todos.forEach((item)=>{
        if(item.classList.length == 0){
            item.setAttribute('hidden', 'yes')
        }
    })
    console.log('todos los SPAN', todos)
}

function renombrarEtiqueta() {
    let etiquetaOriginal = event.target
    // Solo tomar los eventos de los SPAN
    console.log('tag', etiquetaOriginal, etiquetaOriginal.tagName)
    if (etiquetaOriginal.tagName === 'SPAN') {
        let nuevaEtiqueta = prompt('Ingresa el nuevo valor de la etiqueta', etiquetaOriginal.innerText)
        if (nuevaEtiqueta != '') {
            actualizarClaseCSS(etiquetaOriginal, nuevaEtiqueta)
            etiquetaOriginal.innerText = nuevaEtiqueta
        }
    }
}

function actualizarClaseCSS(elemento, etiquetaNueva) {
    if (elemento.classList.contains(elemento.innerText)) {
        elemento.classList.remove(elemento.innerText)
    }
    elemento.classList.add(etiquetaNueva)
}

function saludar() {
    const VALOR_INICIAL = '[Tu nombre]'
    let nombre = prompt('Ingresa tu nombre', VALOR_INICIAL)

    if (nombre == '' || nombre == VALOR_INICIAL) {
        alert('Ingresa un nombre válido')
    } else {
        document.getElementById('saludo').innerText = 'Bienvenidos al curso, ' + nombre
    }
}
