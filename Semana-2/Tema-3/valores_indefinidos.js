function validarTipo(unParametro){
    let mensaje = unParametro + " Es del tipo: " 
    if(Array.isArray(unParametro)){
        return mensaje + "Array"
    }
    return mensaje + typeof unParametro
}

// validarTipo( 23 )
// validarTipo( "asasasa" )
// validarTipo( ()=>{"algo"} )
// validarTipo( false )
// validarTipo( {} )

// Función auto invocable
(function(){
    let mensaje = 'hola desde la función anónima.'
    alert(mensaje)
    setTimeout(() => {
        document.body.style.backgroundColor = '#e6e6fe'
    }, 1000);
    console.log('Ya se ejecutó la función automáticamente.')
})()


