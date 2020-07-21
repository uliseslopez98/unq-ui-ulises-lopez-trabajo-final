import React from 'react';
import { useHistory } from 'react-router';
import Juego from './Juego';

export default function Barra({ reiniciar }) {
    const history = useHistory();
    const unjugador = () => history.push('/unjugador');
    const dosjugadores = () => history.push('/dosjugadores');

    return (
      <>
        <nav className="navbar navbar-dark">
            <div className="navbar-brand btn btn-outline-dark" onClick={unjugador}>
            <img src='logo1j.png'/> </div>
            <button className="btn btn-outline-secondary" onClick= {() => reiniciar()}>Reiniciar contador</button>
            <div className="navbar-brand btn btn-outline-dark" onClick={dosjugadores}>
            <img src='logo2j.png'/> </div>
        </nav>
      </>
      );
    }