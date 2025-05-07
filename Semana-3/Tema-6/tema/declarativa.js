// Paso por paso
function iniciarSesion(){
    // Elementos del formulario: correo, clave, btnlogin, mensaje

    // correo y contraseña deben ser correctos
    // elboton login se debe desactivar durante la validación
    if(validarDatosDeAcceso()){
        // si el acceso es correcto, reenviar al home
        // mostrar un mensaje con el resultado
        mostrarMensaje('Credenciales válidas')
        reenviarABienvenida()
    }else{
        // si el acceso es incorrecto, borrar el formulario
        mostrarMensaje('Inicio de sesión incorrecto')
        limpiarFormulario()
        // mostrar un mensaje con el resultado
    }
}

function limpiarFormulario(){
    document.forms[0].reset()
}

function reenviarABienvenida(){
    location.href = 'bienvenido.html'
}

function validarDatosDeAcceso(){
    desactivarBotonLogin()
    let txtCorreo = document.getElementById('correo').value
    let txtClave = document.getElementById('clave').value
    return (validarCorreo(txtCorreo) && validarClave(txtClave))
}

const validarCorreo = (inputCorreo) => inputCorreo != ''
const validarClave = (inputClave) => inputClave != ''

function desactivarBotonLogin(){
    document.getElementById('btnlogin').disabled = false
}

function mostrarMensaje(elmensaje){
    document.getElementById('mensaje').innerText = elmensaje
}

const formularioLogin = {
    usuario: '',
    clave: '',
    iniciarSesion(){},
    mostrarMensaje(){},
    resetear(){}
}

function irHome(){
    location.href="/"
}

const sesion = {
    iniciar(){
        // validacion
        this.usuario = 'admin'
        delete this.clave
    },
    salir(){
        
    }
}

