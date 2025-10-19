import { pedirCarta } from './pedir-carta.js';
import { valorCarta } from './valor-carta.js';
/**
 * 
 * @param {Number}  puntosMinimos  : puntos que la computadora necesita para ganar
  * @param {HTMLElement} puntosHTML : arreglo con los elementos HTML donde se muestran los puntos
  * @param {HTMLElement} divCartasComputadora : elemento HTML para mostrar las cartas de la computadora
  * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora ,deck =[] ) => {

    if(!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if(!puntosHTML)throw new Error('Puntos HTML son necesarios');

    let puntosComputadora = 0;
    
    do {
        const carta = pedirCarta( deck );
        
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );
        //condición de si el jugador se pasa de 21
        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}


