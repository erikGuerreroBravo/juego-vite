
import _ from 'underscore';


/**
 * 
 * @param {array} tiposDeCarta 
 * @param {array} tiposEspeciales 
 * @returns  {array} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
   
   if(!tiposDeCarta) throw new Error('Tipos de carta es obligatorio como un arreglo de string');
   
    let deck = [];
    //ciclo iteratrivo
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}
