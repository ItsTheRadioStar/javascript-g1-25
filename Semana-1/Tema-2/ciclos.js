const DIAS_DE_LA_SEMANA = [
    "Lunes",     // indice 0
    "Martes",    // indice 1
    "Miércoles", // indice 2
    "Jueves",    // indice 3
    "Viernes",   // indice 4
    "Sábado",    // indice 5
    "Domingo"    // indice 6
]
console.log(DIAS_DE_LA_SEMANA.length);


// Recorrer el array usando for
for (let indice = 0; indice < DIAS_DE_LA_SEMANA.length; indice++) {
    const dia = DIAS_DE_LA_SEMANA[indice]
    console.log(dia);
}

// Recorrer el array usando while
let indice = 0;
while (indice < DIAS_DE_LA_SEMANA.length) {
    const dia = DIAS_DE_LA_SEMANA[indice]
    console.log(dia);
    indice = indice + 1
}

let nuevosDias = []

let MesDeAbril = []
DIAS_DE_LA_SEMANA.forEach((dia, indice) => {
    console.log(dia, indice)
})

MesDeAbril.push(...DIAS_DE_LA_SEMANA)
MesDeAbril[0] = null

const LIMITE_DIAS = 30

do {
    MesDeAbril.push(...DIAS_DE_LA_SEMANA)
} while (MesDeAbril.length <= LIMITE_DIAS);

// Cortar el array para que coincida con los días del calendario
MesDeAbril = MesDeAbril.splice(0, LIMITE_DIAS + 1)
console.log('MesDeAbril', MesDeAbril[30]);
