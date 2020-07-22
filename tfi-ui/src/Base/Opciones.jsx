import React from 'react';
import Juego from './Juego';

const Opciones = ({eleccion, colorJ}) => {

    const claseOpcion = `btn btn-outline-${colorJ}`

    const incognito = Juego.alAzar();

    return (
        <div className="text-center">

            <div className={claseOpcion}
                    onClick={() => eleccion("piedra")}>
                <img src='piedra.jpg' alt='piedra' />
            </div>

            <div className={claseOpcion}
                    onClick={() => eleccion("papel")}>
                <img src='papel.jpg' alt='papel' />
            </div>

            <div className={claseOpcion}
                    onClick={() => eleccion("tijera")}>
                <img src='tijera.jpg' alt='tijera'/>
            </div>

            <div className={claseOpcion}
                    onClick={() => eleccion("lagarto")}>
                <img src='lagarto.jpg' alt='lagarto' />
            </div>

            <div className={claseOpcion}
                    onClick={() => eleccion("spock")}>
                <img src='spock.jpg' alt='spock' />
            </div>

            <div className={claseOpcion}
                    onClick={() => eleccion(incognito)}>
                <img src='secreto.jpg' alt='secreto' />
            </div>

        </div>
    )
}

export default Opciones;