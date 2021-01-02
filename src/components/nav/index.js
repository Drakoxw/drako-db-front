import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import dragonmin from './favicon.png'

function Nav() {
  return (
    <nav >
      <div className="nav-bar">

        <div className="conten1" >

          <div className="conten-logo-x" >
            <div className="conten-logo" >
              <img className="min-dragon" alt="dragon-icon" src={dragonmin}></img>
              <p className="parr" >DRDisc DB</p>
            </div>
          </div>
          <div className="conten-link-x">
            <div className="conten-link">
              <ul>
                <li><Link to="/home">REGISTRO</Link></li>

                <li><Link to="/clientes">CLIENTE</Link></li>

                <li><Link to="/reservas">RESERVAS</Link></li>

                <li className="x-r"><Link to="/depurar">DEPURAR</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default  Nav;
