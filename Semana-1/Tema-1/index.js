function HolaMundo(){
    return "Hola desde Javascript usando workspace, para que lo vean en VS Code";
}

function saludar(){
    console.log(HolaMundo(), "Usando la función 'saludar()'");
}

// Declaración de variables
let variable = "hola";

let VariableConMuchasPalabras = "muchas palabras";

let variable_con_muchas_palabras = "usando guión bajo";

let _algo = "con guión bajo";

let $valido = "con signo de dólar";

let estaEncendido = true || false || 0 || 1

// Crear funciones
function Ejemplo1 (){
    return "ok"
}

function Ejemplo2(nombre){
    console.log('Su nombre es:', nombre);
}

// Inicializando parámetros
function Ejemplo3(esFalso = false){
    return esFalso
}

// Programación orientada a objetos
const perro = {
    // propiedad
    nombre: '',
    raza: '',
    meses: 3,
    // Métodos
    getEstado: function(){
        return this.nombre + " es un perro de raza (" + this.raza + ") de (" + this.meses + ") meses de edad."
    },
    getEstado2: function(){
        return this.nombre.concat(" es un perro de raza (", this.raza, ") de (", this.meses, ") meses de edad.")
    },
    getEstado3: function(){
        return `${this.nombre} es un perro de raza (${this.raza}) de (${this.meses}) meses de edad.`
    }
}

perro.nombre = 'firulais'
perro.raza = 'eléctrico'
perro.meses = 10

console.log(perro.getEstado() )
console.log(perro.getEstado2())
console.log(perro.getEstado3())

// Declaración de variables y constantes
function DeclarandoVariables() {
    let variable = 123
    const SIN_MODIFICAR = 10

    // Función tipo flecha
    const mifunctionTipoFlecha = (a, b) => {
        return 2 + 2 * (a * b)
    }

    console.log('Función flecha', mifunctionTipoFlecha(1,3))
}

// Intentar llamar a una variable que no está dentro del scope
SIN_MODIFICAR

