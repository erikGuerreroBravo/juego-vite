 
 
/**
 * 
 * @param {String} carta 
 * @returns  {HTMLImageElement}  elemento imagen de la carta esta se regresa para ser añadida al DOM
 */
export const crearCartaHTML = ( carta ) => {
 
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}