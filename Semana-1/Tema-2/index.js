function saludo(){
    return 'Hola a todos'
}

let saludar = false


if(saludar){
    console.log(saludo());
}else if(!saludar && 0 != 3 ){
    console.log('Esta línea se ejecuta cuando -saludar- es true');
}else{
    console.log('Este se ejecuta cuando -saludar- es false.');
}

// Validar la hora
const HORA = 11
let mensajeSaludo;

/*
if(HORA < 12){
    mensajeSaludo = "Buenos días"
}
if(HORA < 20){
    mensajeSaludo = "Buenas tardes"
}
if(HORA >= 20){
    mensajeSaludo = "Buenas noches"
}
    */

// 6-11 am dias / 5
// 12-7 tardes /  7
// 8-5 noches / 12

switch (HORA) {
    // Días
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        mensajeSaludo = "Buenos días"
        break;
    // Tardes
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        mensajeSaludo = "Buenas tardes"
        break;

    case 20:
    case 21:
    case 22:
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    // Noches
    default: mensajeSaludo = "Buenas noches"
}
console.log(mensajeSaludo);


// Asignación condicional
let tipoSaludo = HORA == 11 ? 'Buenos días' : '';

console.log(tipoSaludo);

