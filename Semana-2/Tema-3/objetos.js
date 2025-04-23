let alumnos = {
    personas: [],
    nombre: '',
    apellido: '',
    edad: '',
    agrega(...personas){
        this.personas.push(...personas)
    },
    saludo(i){
        return `Hola, mi nombre es ${this.personas[i]}`
    },
}

alumnos.agrega('Cesar', 'Martin', 'Alberto', 'Shen')
console.log(alumnos.saludo(1))