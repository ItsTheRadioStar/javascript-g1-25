class Carrito {
    _productos

    constructor() {
        this._productos = []
    }

    agregarProducto(nombre, precio) {
        this._productos.push({ nombre, precio })
    }

    mostrarProductos() {
        console.table(this._productos)
    }

    mostrarTotal() {
        // Sumar usando reduce
        let total = 0;
        total = this._productos.reduce((acumulador, producto) => acumulador + producto.precio, 0)
        
        // Otra forma de sumar
        let sumar = 0;
        this._productos.forEach((producto)=>{
            sumar += producto.precio
        })
        
        return sumar
    }
}

let micarrito = new Carrito()
micarrito.agregarProducto('Agua', 20)
micarrito.agregarProducto('Galleta', 15)
micarrito.agregarProducto('Refresco', 25)
// micarrito.mostrarProductos()
console.log(micarrito.mostrarTotal())

// console.log(micarrito._productos)


// function sumarReduce(total, valorASumar, valorInicial){
//     total = valorInicial // 0
//     total = total + valorASumar
//     return total
// }