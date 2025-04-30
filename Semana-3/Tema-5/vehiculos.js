// Coche
// Bicicleta

// Clase padre
class Vehiculo {
    color
    marca

    avanzar(){
        console.log('Se mueve hacia adelante.')
    }

    tocarClaxon(){
        console.log('-Ruido de claxon-')
    }
}

// Clases hijo
class Coche extends Vehiculo {
    modelo

    encender(){
        this.tocarClaxon()
    }

}

class Bicicleta extends Vehiculo {
    tipo

    // pedalear(){
    //     this.tocarClaxon()
    //     this.avanzar()
    // }

    avanzar(adelante = true){
        if(adelante){
            console.log('Pedalear hacia adelante.')
        }else{
            console.log('Pedalear hacia atrás')
        }
    }

    encadenar(){

    }
}

let bici = new Bicicleta()
// bici.pedalear()
// bici.avanzar()

let auto = new Coche()
bici.tipo = 'Montaña'
// No existe la propiedad en la clase
auto.placas = 'ABC123'

console.log(auto.placas)
