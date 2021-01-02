import React from 'react';
import { Switch, Route } from 'react-router-dom' ;
import './App.css';
import HomeLog from './HomeLog';
import Nav from './components/nav';
import Home from './layout/Home';
import Clientes from './layout/Clientes';
import Reservas from './layout/Reservas';
import Depurar from './layout/Depurar'

function App() {
  return (
    <div className="BodyPagina">
      <Nav />

      <Switch>
      
        <Route path="/home" >
          <Home titulo="ULTIMOS CLIENTES" />
        </Route>
        <Route path="/clientes" >
          <Clientes titulo="LISTAS DE CLIENTES" />
        </Route>
        <Route path="/reservas" >
          <Reservas titulo="LISTA DE RESERVAS" />
        </Route>
        <Route path="/depurar" >
          <Depurar titulo="DEPURAR BASE DE DATOS" />
        </Route>
        <Route path="/" >
          <HomeLog titulo="" />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
