// Funciones puras
// Devuelven el mismo resultado siempre con los mismos datos
const suma = (a,b) => (a+b)

// Función impura
const tiempo = () => Date.now()
console.log(tiempo())
console.log(tiempo())

let total = 0
