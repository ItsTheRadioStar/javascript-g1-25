let personaPrototipo = {
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

// Simula ser el constructor de la clase
function crearPersona(nombre){
    let nuevaPersona = Object.create(personaPrototipo)
    nuevaPersona.setNombre(nombre)
    return nuevaPersona
}

let alumno = crearPersona('Alan')

console.log(alumno.getNombre())

alumno.setEdad(0)
console.log(alumno.getEdad())
