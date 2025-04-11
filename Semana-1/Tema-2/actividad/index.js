// Pedir dos números
// Indicar el mayor, menor, o si son iguales

// document.title = "Control de flujo con Javascript"

let numero1, numero2;

function esNumero(valor){
    return !isNaN(valor)
}


while(!esNumero(numero1) && !esNumero(numero2)) {
    // typeof numero1 != 'number' && typeof numero2 != "number"
    
    // Pedir dos números
    numero1 = parseInt(prompt("Introduce el primer número.", 0))
    numero2 = parseInt(prompt("Introduce el segundo número.", 0))
    
    if(numero1 == numero2){
        alert("Ambos números son iguales.")
    } else if(numero1 > numero2){
        alert("El número mayor es " + numero1)
        alert("El número menor es " + numero2)
    } else if(numero2 > numero1){
        alert("El número mayor es " + numero2)
        alert("El número menor es " + numero1)
    }else{
        alert("Introduce números correctos.")
    }
    
}
