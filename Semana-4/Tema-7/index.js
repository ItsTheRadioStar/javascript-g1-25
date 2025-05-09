// Actividad sesión 7
function hambugerMenu(panelBtn) {
    let panel = document.querySelector('.panel')
    if (panelBtn.target.classList.contains('hamburger')) {
        panel.classList.add('is-active')
    } else {
        panel.classList.remove('is-active')
    }
}

document.addEventListener('click', hambugerMenu)

const DOC = document

function digitalClock(clock, btnPlay, btnStop) {
    // let clockTempo = clock
    // btnPlay.disabled =
}

DOC.addEventListener('click', function (e) {

    // Reloj
    if (e.target.id == 'activar-reloj') {
        console.log('iniciar reloj')
        e.target.disabled = true
        document.querySelector('#desactivar-reloj').disabled = false
    }
    if (e.target.id == 'desactivar-reloj') {
        console.log('detener reloj')
        e.target.disabled = true
        document.querySelector('#activar-reloj').disabled = false
    }

    // Alarma
    if (e.target.id == 'activar-alarma') {
        // digitalClock()
        console.log('iniciar alarma')
        e.target.disabled = true
    }
    if (e.target.id == 'desactivar-alarma') {
        console.log('detener alarma')
        e.target.disabled = true
        document.querySelector('#activar-alarma').disabled = false
    }

})
