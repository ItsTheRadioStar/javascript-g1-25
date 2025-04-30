// Definir objeto vacío
let objeto = {}

// Definir un objeto con métodos y atributos
let persona = {
    nombre: '',
    edad: '',

    hablar() {

    },

    saludar() {
        if (this.tieneNombre()) {
            return `Hola, soy ${this.getNombre()}`;
        }
        return this.getNombre()
    },

    tieneNombre() {
        return this.nombre && this.nombre.length > 3
    },

    edadValida(nuevaEdad) {
        let edadAValidar = nuevaEdad || this.edad
        // Que no sea null/undefined, diferente a una cadena vacía y sea un número
        return edadAValidar && edadAValidar != '' && !isNaN(edadAValidar)
    },

    setNombre(nuevoNombre) {
        if (nuevoNombre == '') {
            console.error('[Ingrese un valor]')
        }
        this.nombre = nuevoNombre
    },

    setEdad(nuevaedad) {
        if(this.edadValida(nuevaedad)){
            console.error('[Ingrese un valor numérico]')
        }
        this.edad = nuevaedad
    },

    getNombre() {
        return this.tieneNombre()
            ? this.nombre
            : '[ingresa un nombre]'
    },

    getEdad() {
        return this.edadValida() ? this.edad : '[ingresa la edad]'
    }
}

persona.setNombre()
console.log(persona.getNombre())

console.log(persona.getEdad())
