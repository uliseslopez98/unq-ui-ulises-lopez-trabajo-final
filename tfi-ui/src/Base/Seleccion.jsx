import React from 'react';

const Seleccion = ({seleccionJ1, seleccionJ2, seleccionados, contraM}) => {

    const primerJugador = contraM ? 'Jugador' : 'Jugador 1'
    const segundoJugador = contraM ? 'Maquina' : 'Jugador 2'

    return(
        <div className="align-items-center text-dark" >
            <div>
                <div className="text-center text-dark">
                    <h3> Eleccion {primerJugador} :
                    {contraM && <img src={seleccionJ1 ? `${seleccionJ1}.jpg` : 'secreto1.png'}/>}
                    {!contraM && <img src={seleccionJ1 && seleccionados ? `${seleccionJ1}.jpg` : 'secreto1.png'}/>}
                    {!contraM && <img src={seleccionJ1 && !seleccionados ? `confirmacion.png` : ''}/>}
                    </h3>
                </div>
            </div>
            <div>
                <div className="text-center text-dark">
                    <h3> Eleccion {segundoJugador} :
                    <img src={seleccionJ2 && seleccionados ? `${seleccionJ2}.jpg` : 'secreto2.png'}/>
                    <img src={seleccionJ2 && !seleccionados ? `confirmacion.png` : ''}/>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Seleccion;