 
 
/**
 * 
 * @param {String} carta 
 * @returns  {HTMLImageElement}  elemento imagen de la carta esta se regresa para ser añadida al DOM
 */
export const crearCartaHTML = ( carta ) => {
 
    if(!carta) throw new Error('La carta es un argumento obligatorio');
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}