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
                <div> <img src={require("../img/todos4.jpg")}/> </div>
            </h1>
            <div className= "botones-inicio">
                <div className="formato-boton"><button type= "button" className= "btn btn-outline-info btn-lg" onClick = {() => unjugador()}><img src={require("../img/unjugador.png")}/> Un Jugador</button></div>
                <div className="formato-boton"><button type= "button" className= "btn btn-outline-warning btn-lg" onClick = {() => dosjugadores()} ><img src={require("../img/dosjugadores.png")}/> Dos Jugadores</button></div>
            </div>
                <div><button type= "button" className= "btn btn-outline-danger btn-sm" /*onClick = {() => info()}*/ ><img src={require("../img/mas.png")}/> info</button></div>
        </div>
    )

}