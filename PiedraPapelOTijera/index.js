// Variables opciones
const piedra = document.querySelector('#piedra');
const papel = document.querySelector('#papel');
const tijeras = document.querySelector('#tijeras');
const imagenes = document.querySelectorAll('.imagen');
const mensaje = document.querySelector('#mensaje');
// Variables tablero
let tableroJugador = document.querySelector("#puntaje_jugador");
let tableroBot = document.querySelector("#puntaje_bot");
// Variables de juego
puntajeJugador = 0;
puntajeBot = 0;

// Eventos por opción
piedra.addEventListener('click', ()=> resultado('piedra'));
papel.addEventListener('click', ()=> resultado('papel'));
tijeras.addEventListener('click', ()=> resultado('tijeras'));

// Funciones de juego
function resultado(opcionJugador){
    const opcionBot = opcionDelBot();

    switch(opcionJugador + opcionBot){
        case "piedraTijeras":
        case "papelPiedra":
        case "tijerasPapel":
            animaciones(1);
            break;
        case "piedraPapel":
        case "papelTijeras":
        case "tijerasPiedra":
            animaciones(2);
            break;
        case "piedraPiedra":
        case "papelPapel":
        case "tijerasTijeras":
            animaciones(3);  
            break;
    }
};

function opcionDelBot(){
    const opcionesBot = ['Piedra', 'Papel', 'Tijera'];
    let random = parseInt(Math.random()*3);
    let opcionBot = opcionesBot[random];
    return opcionBot;
};


function animaciones(resultado){

    // ganaste
    if(resultado == 1){
        imagenes.forEach(img => {
            img.style.boxShadow = "0px 0px 14px 9px #00FF4F";
        });

        puntajeJugador++;
        tableroJugador.textContent = puntajeJugador;
        tableroJugador.classList.add('animacion');
        
        if(mensaje.textContent == "ganaste" || mensaje.textContent == "ganaste de nuevo"){
            mensaje.textContent = "ganaste de nuevo";
        }
        else{
            mensaje.textContent = "ganaste";
        }

        setTimeout(()=>{    
            tableroJugador.classList.remove('animacion');
        },1000)
    }

    // perdiste
    else if(resultado == 2){
        imagenes.forEach(img => {
            img.style.boxShadow = "0px 0px 14px 9px #FF0505";
        }); 

        puntajeBot++;
        tableroBot.textContent = puntajeBot;
        tableroBot.classList.add('animacion');

        if(mensaje.textContent == "perdiste" || mensaje.textContent == "perdiste de nuevo"){
            mensaje.textContent = "perdiste de nuevo";
        }
        else{
            mensaje.textContent = "perdiste";
        }

        setTimeout(()=>{    
            tableroBot.classList.remove('animacion');
        },1000)
    }

    // empataste
    else{
        imagenes.forEach(img => {
            img.style.boxShadow = "0px 0px 14px 9px #E9FF3A";
        });
        
        if(mensaje.textContent == "empate" || mensaje.textContent == "empate de nuevo"){
            mensaje.textContent = "empate de nuevo";
        }
        else{
            mensaje.textContent = "empate";
        }
    }
}

