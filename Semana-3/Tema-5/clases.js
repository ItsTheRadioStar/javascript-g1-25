class Coche {
    color
    modelo
    propietario


    constructor(propietario = '', color = '', modelo = ''){
        this.propietario = propietario
        this.color = color
        this.modelo = modelo
        console.log(`Se creó un coche ${modelo} ${color} de ${propietario}`)
    }

    desplazarse(){
        console.log('El auto modelo '+ this.modelo +' se mueve')
    }

    getPropietario(){
        console.log('Este coche es de ', this.propietario)
    }
}

let coche = new Coche('Cesar', 'Azul', 'Gdz')

let otroCoche = new Coche('Alberto', 'Morado', 'Rbl')
otroCoche.modelo = 'Deportivo'

let cocheDelVecino = new Coche()
cocheDelVecino.getPropietario()
cocheDelVecino.color = 'Verde'

console.log(otroCoche)
console.log(cocheDelVecino)

cocheDelVecino.getPropietario()

let otromas = Object.create(cocheDelVecino)
otromas.propietario // No hay autocompletado
