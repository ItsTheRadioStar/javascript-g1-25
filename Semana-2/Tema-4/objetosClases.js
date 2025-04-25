// Copia dependiente
let animal = {
    especie: 'perro'
}
let mascota = animal
animal.especie = 'dinosaurio'

// Copia independiente de un objeto
let otramascota = JSON.parse(JSON.stringify(animal))


otramascota.especie = 'alien'
console.log(otramascota.especie);

let grupoA = {
    grupo: 'A',
    materia: 'programacion'
}
console.log(grupoA.materia)

let grupoB = grupoA
console.log(grupoA.materia, grupoB.materia)

grupoB.materia = 'cocina'
console.log(grupoA.materia)
