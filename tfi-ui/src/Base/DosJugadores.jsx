import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Juego from './Juego';
import Opciones from './Opciones';
import Seleccion from './Seleccion';
import Puntuacion from './Puntuacion';


const UnJugador = () => {
    const [seleccionJ1, establecerSeleccionJ1] = useState(null);
    const [seleccionJ2, establecerSeleccionJ2] = useState(null);
    const [puntosJ1, establecerPuntosJ1] = useState(0);
    const [puntosJ2, establecerPuntosJ2] = useState(0);
    const [seleccionados, establecerSeleccionados] = useState(false);
    const [tipoBoton, establecerTipoBoton] = useState(null);
    const [texto, establecerTexto] = useState("");
    const [colorGanador, establecerColorGanador] = useState("");
    const [infoGanador, establecerInfoGanador] = useState(false);
    const history = useHistory();
    const unjugador = () => history.push('/unjugador');
    const dosjugadores = () => history.push('/dosjugadores');


    const combate = () => {
        const { puntosJ1, puntosJ2, ganador, eleccionJ1, eleccionJ2 } = Juego.Juego(seleccionJ1, seleccionJ2);
        establecerPuntosJ1(puntosJ1);
        establecerPuntosJ2(puntosJ2);
        establecerSeleccionJ1(eleccionJ1);
        establecerSeleccionJ2(eleccionJ2);

        if(ganador === 'empate'){
            establecerColorGanador("secondary")
            establecerTexto('EMPATE eligieron lo mismo ')
        } else if(ganador === 'J1') {
            establecerColorGanador("info")
            establecerTexto('GANO JUGADOR 1 ')
        } else {
            establecerColorGanador("danger")
            establecerTexto('GANO JUGADOR 2 ')
        }

        establecerSeleccionados(true);
        establecerTipoBoton('de nuevo');
        establecerInfoGanador(true);
    }

    const reiniciarJuego = () => {
        establecerSeleccionJ1(null);
        establecerSeleccionJ2(null);
        establecerSeleccionados(false);
        establecerTipoBoton(null);
        establecerInfoGanador(false);
    }

    const  alAzar = () => {
        const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
        const eleccion = Math.floor(Math.random() * (opciones.length));
        return opciones[eleccion];
    }

    const seleccionamientoJ1 = (decision) => {
        establecerSeleccionJ1(decision);
        if (seleccionJ2) establecerTipoBoton('combatir');
    }

    const seleccionamientoJ2 = (decision) => {
        establecerSeleccionJ2(decision);
        if (seleccionJ1) establecerTipoBoton('combatir');
    }

    const lasOpciones = () => tipoBoton === 'combatir' || !tipoBoton

    return(
        <>
        <nav className="navbar navbar-dark">
            <div className="navbar-brand btn btn-outline-dark" onClick={unjugador}>
            <img src='logo1j.png'/> </div>
            <div className="navbar-brand btn btn-outline-dark" onClick={dosjugadores}>
            <img src='logo2j.png'/> </div>
        </nav>
        <div>
            {lasOpciones() &&
            <Opciones eleccion={seleccionamientoJ1} colorJ='info'/>}

            <Seleccion seleccionJ1={seleccionJ1} seleccionJ2={seleccionJ2}
                       seleccionados={seleccionados} contraM={false}/>

            {lasOpciones() &&
            <Opciones eleccion={seleccionamientoJ2} colorJ='warning'/>}
        </div>
            <>
            {infoGanador && <h2 className= {"alert alert-" + colorGanador +" text-center"}>{texto}</h2>}
            </>
        <Puntuacion puntosJ1={puntosJ1} combate={combate} tipoBoton={tipoBoton}
                    puntosJ2={puntosJ2} reiniciarJuego={reiniciarJuego} contraM={false}/>
        </>
    );
}

export default UnJugador;