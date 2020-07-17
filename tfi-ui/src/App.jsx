import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MenuInicial from './Base/MenuInicial'
import UnJugador from './Base/UnJugador'
import DosJugadores from './Base/DosJugadores'



function App() {
  return (
    <div>
        <BrowserRouter>
          <Switch>
              <Route exact path= "/" component= {MenuInicial} />
              <Route exact path= '/unjugador'    component= {UnJugador} />
              <Route exact path= '/dosjugadores' component= {DosJugadores} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
