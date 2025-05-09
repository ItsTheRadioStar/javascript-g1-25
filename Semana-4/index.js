let listaElementos = []

const lista = {
    items: [],
    container: null,

    init() {
        this.container = document.querySelector('.contenedor-lista .lista')
    },

    agregar(texto) {
        this.items.push(texto)
    },

    eliminar(id) {
        this.items.splice(id, 1)
    },

    getHTML() {
        let html = ''
        this.items.forEach((element, indice) => {
            html += `<li codigo="${indice}">${element}</li>`
            // html += "<li codigo='" + indice + "'>" + element + "</li>"
            // html.concat("<li codigo='", indice, "'>", element, "</li>")
        })
        return `<li>${html}</li>`;
    },

    updateView() {
        this.container.innerHTML = this.getHTML()
    }
}

function agregarElemento() {
    let texto = document.getElementById('txtTexto').value
    if (texto != '') {
        lista.agregar(texto)
        document.querySelector('form').reset()
        lista.updateView()
    }
}

function eliminarElemento(e){
    let elementoCliqueado = e.target
    let codigo = parseInt(elementoCliqueado.getAttribute('codigo'))
    lista.eliminar(codigo)
    lista.updateView()
}

// Agregamos el evento de clic a los elementos de la lista
function loadApp() {
    document.querySelector('.contenedor-lista .lista').addEventListener('click', eliminarElemento)
    lista.init()
}
