const objeto = {} // objeto vacío

const jugador = {
    nombre: "Ryu",
    poder: 10,
    vida: 99,
    totalVida: 100,
    atacar: function () {
        console.log(this.nombre, 'atacó a', enemigo.nombre, 'con', this.poder, 'puntos de poder.')
        enemigo.vida = enemigo.vida - this.poder;
        if (enemigo.vida <= 0) {
            enemigo.vida = 0
            console.error(enemigo.nombre, 'es derrotado.');
        }
        // Modificar el HTML donde mostramos los puntos de vida del enemigo
        document.getElementById('estado_enemigo').innerText = enemigo.vida + '/ PV'
    },
    estado: function () {
        console.log(this.nombre, 'tiene', this.vida, 'puntos de vida.')
    }
}

const enemigo = {
    nombre: 'Ken',
    poder: 25,
    vida: 100,
    totalVida: 200,
    atacar: function () {
        console.log(this.nombre, 'atacó a', jugador.nombre, 'con', this.poder, 'puntos de poder.')
        jugador.vida = jugador.vida - this.poder
        if (jugador.vida <= 0) {
            jugador.vida = 0
            console.error(jugador.nombre, 'pierde');
        }
        // Modificar el HTML donde mostramos los puntos de vida del jugador
        document.getElementById('estado_jugador').innerText = jugador.vida + '/ PV'
    },
    estado: function () {
        console.log(this.nombre, 'tiene', this.vida, 'puntos de vida.')
    },
}

// Modificar el prototipo de los objetos
Object.prototype.toString = function(){
    return `${this.nombre} ( ${this.vida}/${this.totalVida} PV)`
}

// Cargar valores iniciales
function cargarPagina(){
    document.getElementById('nombre_jugador').innerText = jugador.nombre
    document.getElementById('estado_jugador').innerText = jugador.vida + '/ PV'
    document.getElementById('nombre_enemigo').innerText = enemigo.nombre
    document.getElementById('estado_enemigo').innerText = enemigo.vida + '/ PV'
}

const numero = 42325.2
console.log(numero.toString() )
console.log(numero.toLocaleString())
console.log(numero.toFixed(3))

