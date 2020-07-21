import React from 'react';
import { useHistory } from 'react-router';
import Juego from './Juego';

export default function Barra({ reiniciar }) {
    const history = useHistory();
    const unjugador = () => history.push('/unjugador');
    const dosjugadores = () => history.push('/dosjugadores');
    const MenuInicial = () => history.push('/');

    return (
      <>
        <nav className="navbar navbar-dark">
            <div className="navbar-brand btn btn-outline-dark" onClick={unjugador}>
            <img src='logo1j.png'/> </div>

            <button className="btn btn-outline-secondary" onClick= {() => reiniciar()}><img src={require("../img/reiniciar.png")}/> Reiniciar contador</button>

            <div className="navbar-brand btn btn-outline-dark" onClick={MenuInicial}>
            <img src='inicio.png'/> Inicio </div>

            <div className="navbar-brand btn btn-outline-dark" onClick={dosjugadores}>
            <img src='logo2j.png'/> </div>
        </nav>
      </>
      );
    }