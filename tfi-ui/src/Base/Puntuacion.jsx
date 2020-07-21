import React from 'react';

const Puntuacion = ({puntosJ1, combate, tipoBoton, puntosJ2, siguientePartida, contraM}) => {
                  /*playerWins, fight,playerTwoWins,showingButton, restartGame,   iaMode*/
    const PrimerJugador = contraM ? 'Jugador' : 'Jugador 1'
    const SegundoJugador = contraM ? 'Maquina' : 'Jugador 2'

    return(

        <div className="row">
            <h3 className="col text-center">{PrimerJugador} : {puntosJ1}</h3>
                {tipoBoton === 'combatir' &&
                <button className="btn btn-primary col-2 btn-lg"
                onClick={combate} > A JUGAR ! </button>}
            {tipoBoton === 'de nuevo' &&
                <button className="btn btn-info bgnav col-2 btn-lg"
                onClick={siguientePartida} > VOLVER A ELEGIR ! </button>}
            <h3 className="col text-center">{SegundoJugador}  :  {puntosJ2}</h3>
        </div>
    );
}

export default Puntuacion;