let pedirNuevoNombre = ''

const juego = {
    opciones: {
        0: "Piedra", 1: "Papel", 2: "Tijera"
    },
    jugadores: {
        jugador1: "Jugador 1",
        jugador2: "Jugador 2"
    },
    scores: {
        puntosJ1: 0,
        puntosJ2: 0
    },
    cambiarNombre(){
        let nuevonombre = this.pedirNombreUsuario()
        if(this.esNombreValido(nuevonombre)){
            // Si tiene solo letras y números
            this.jugadores.jugador1 = nuevonombre
            alert('Bienvenido'+ nuevonombre)
        }else{
            // Si tiene caracteres especiales
            this.jugadores.jugador1 = 'Jugador 1'
            alert('Mejor te llamaré Jugador 1')
        }
    },
    esNombreValido(valor){
        let REGEXP = new RegExp(/[A-Z0-9]\w+/ig)
        return REGEXP.test(valor)
    },
    pedirNombreUsuario: () => prompt("Escribe el nombre del usuario"),
    aleatorio: () => Math.floor(Math.random() * 3 - 1) +1,
    imprimirManoAleatoria(){
        return this.opciones[this.aleatorio()]
    },

    imprimirResultado(){
        let manoJ1 = this.imprimirManoAleatoria();
        let manoJ2 = this.imprimirManoAleatoria();

        console.log(`${this.jugadores.jugador1} [${manoJ1}]`)
        console.log(`${this.jugadores.jugador2} [${manoJ2}]`)

        this.obtenerGanador(manoJ1, manoJ2)
    },

    obtenerGanador(j1, j2){
        // 0: "Piedra", 1: "Papel", 2: "Tijera"
        if(j1 == 'Piedra'){
            if(j2 == 'Papel'){
                console.warn(`${this.jugadores.jugador2} gana`);
                this.scores.puntosJ2++
                return;
            }
            if(j2 == 'Tijera'){
                console.warn(`${this.jugadores.jugador1} gana`);
                this.scores.puntosJ1++
                return;
            }
            if(j2 == 'Piedra'){
                console.warn(`Empate`);
                return;
            }
        }
        if(j2 == 'Piedra'){
            if(j1 == 'Papel'){
                console.warn(`${this.jugadores.jugador1} gana`);
                this.scores.puntosJ1++
                return;
            }
            if(j1 == 'Tijera'){
                console.warn(`${this.jugadores.jugador2} gana`);
                this.scores.puntosJ2++
                return;
            }
            if(j1 == 'Piedra'){
                console.warn(`Empate`);
                return;
            }
        }
    }
}
