import React from 'react';

const Seleccion = ({seleccionJ1, seleccionJ2, seleccionados, contraM}) => {
          /* result, playerOnePick, playerTwoPick, showSelections, iaMode*/

    const primerJugador = contraM ? 'Jugador' : 'Jugador 1'
    const segundoJugador = contraM ? 'Maquina' : 'Jugador 2'

    /*
    <div>
        {!resultado && <h1> VS </h1>}
        {resultado && <p className={`alert alert-${resultado.finish} text-center`}>{result.message}</p>}
    </div>
    */

    return(

        <div className="align-items-center text-dark" >
            <div>
                <div className="text-center text-dark">
                    <h2> Eleccion {primerJugador} : </h2>
                    {contraM && <img src={seleccionJ1 ? `${seleccionJ1}.jpg` : 'secreto1.png'}/>}
                    {!contraM && <img src={seleccionJ1 && seleccionados ? `${seleccionJ1}.jpg` : 'secreto1.png'}/>}
                </div>
            </div>
            <div>
                <div className="text-center text-dark">
                    <h2> Eleccion {segundoJugador} : </h2>
                    <img src={seleccionJ2 && seleccionados ? `${seleccionJ2}.jpg` : 'secreto2.png'}/>
                </div>
            </div>
        </div>
    )
}

export default Seleccion;