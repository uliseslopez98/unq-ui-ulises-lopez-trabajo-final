import React, { useState } from 'react';
import Juego from './Juego';
import Opciones from './Opciones';
import Seleccion from './Seleccion';
import Puntuacion from './Puntuacion';
import Barra from './Barra';


const UnJugador = () => {
    const [seleccionJ1, establecerSeleccionJ1] = useState(null);
    const [seleccionM, establecerSeleccionM] = useState(null);
    const [puntosJ1, establecerPuntosJ1] = useState(0);
    const [puntosJ2, establecerPuntosM] = useState(0);
    const [seleccionados, establecerSeleccionados] = useState(false);
    const [tipoBoton, establecerTipoBoton] = useState(null);
    const [texto, establecerTexto] = useState("");
    const [colorGanador, establecerColorGanador] = useState("");
    const [infoGanador, establecerInfoGanador] = useState(false);


    const combate = () => {
        const { puntosJ1, puntosJ2, ganador, eleccionJ1, eleccionJ2 } = Juego.Juego(seleccionJ1, seleccionM);
        establecerPuntosJ1(puntosJ1);
        establecerPuntosM(puntosJ2);
        establecerSeleccionJ1(eleccionJ1);
        establecerSeleccionM(eleccionJ2);

        if(ganador === 'empate'){
            establecerColorGanador("secondary")
            establecerTexto('EMPATE eligieron lo mismo ')
        } else if(ganador === 'J1') {
            establecerColorGanador("info")
            establecerTexto('GANASTE contra ' + eleccionJ2 )
        } else {
            establecerColorGanador("danger")
            establecerTexto('PERDISTE contra ' + eleccionJ2)
        }

        establecerSeleccionados(true);
        establecerTipoBoton('de nuevo');
        establecerInfoGanador(true);
    }

    const siguientePartida = () => {
        establecerSeleccionJ1(null);
        establecerSeleccionM(null);
        establecerSeleccionados(false);
        establecerTipoBoton(null);
        establecerInfoGanador(false);
    }

    const reiniciarContador = () => {
        establecerPuntosJ1(0);
        establecerPuntosM(0);
        Juego.reiniciarContador();
    }

    const seleccionamiento = (decision) => {
        establecerSeleccionJ1(decision);
        establecerSeleccionM(Juego.alAzar());
        establecerTipoBoton('combatir');
    }

    const lasOpciones = () => tipoBoton === 'combatir' || !tipoBoton

    return(
        <>
        <Barra reiniciar={reiniciarContador}/>
        <div>
            {lasOpciones() &&
            <Opciones eleccion={seleccionamiento} colorJ='info'/>}
            <Seleccion seleccionJ1={seleccionJ1} seleccionJ2={seleccionM}
                       seleccionados={seleccionados} contraM={true}/>
        </div>
            <>
            {infoGanador && <h2 className= {"alert alert-" + colorGanador +" m-2 text-center"}>{texto}</h2>}
            </>
        <Puntuacion puntosJ1={puntosJ1} combate={combate} tipoBoton={tipoBoton}
                    puntosJ2={puntosJ2} siguientePartida={siguientePartida} contraM={true}/>
        </>
    );
}

export default UnJugador;