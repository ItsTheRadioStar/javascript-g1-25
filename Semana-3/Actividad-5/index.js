class Libro {
    _precio
    _titulo
    _autor

    constructor(precio, titulo, autor) {
        this._precio = precio
        this._titulo = titulo
        this._autor = autor
    }

    // Métodos get (getter)
    getPrecio() {
        return this._precio
    }
    getTitulo() {
        return this._titulo
    }
    getAutor() {
        return this._autor
    }

    // Métodos set
    // setPrecio(precio) {
    //     this._precio = precio
    // }
    setTitulo(nuevotitulo) {
        this._titulo = nuevotitulo
    }
    setAutor(autor) {
        this._autor = autor
    }
}

class Comic extends Libro {
    _ilustradores

    constructor(precio, titulo, autor, ilustradores) {
        // Le pasamos los valores a la clase padre
        super(precio, titulo, autor)

        this._ilustradores = ilustradores || []
    }

    agregarIlustrador(...ilustradores){
        if(!Array.isArray(this._ilustradores)){
            this._ilustradores = []
        }
        this._ilustradores.push(...ilustradores)
    }

    obterIlustrador(){
        return this._ilustradores
    }

    mostrarTodo(){
        console.log(this.getPrecio(), this.getTitulo(), this.getAutor(), this.obterIlustrador())
    }

}

let nuevoComic = new Comic(10,'Superheroes', 'D', ['as', 'b'])
nuevoComic.agregarIlustrador()
nuevoComic.mostrarTodo()
