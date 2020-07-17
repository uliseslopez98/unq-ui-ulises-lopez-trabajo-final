import React from 'react';
import { useHistory } from 'react-router';


export default function MenuInicial(){
    const history = useHistory();
    const unjugador = () => history.push('/unjugador');
    const dosjugadores = () => history.push('/dosjugadores');

    return(
        <div className= "container">
            <h1 className="saludo">
                Elije la cantidad de jugadores para comenzar el
                Piedra, Papel, Tijera, Lagarto, Spock
            </h1>
            <div className= "botones-inicio">
                <div className="formato-boton"><button type= "button" className= "btn btn-info" onClick = {() => unjugador()}><img src={require("../img/unjugador.png")}/> Un Jugador</button></div>
                <div className="formato-boton"><button type= "button" className= "btn btn-warning" onClick = {() => dosjugadores()} ><img src={require("../img/dosjugadores.png")}/> Dos Jugadores</button></div>
            </div>
        </div>
    )

}