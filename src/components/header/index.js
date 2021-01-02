import React from 'react';
import { cerrar } from '../../services/serviceUser';
import '../nav/nav.css';
import dragon from './dragon_nav.png'
import Filtro from '../filtros'

function Header( titulo,
  ) {
  return (
    <header>
      <div className="nav-body" >
          <div className="conten2">
            <img className="img-drak" alt="Drako db logo" src={dragon} ></img>
          </div>
          <div className="conten3">
            <h2>{titulo.titulo}</h2>
            <Filtro />
            <button className="btn-cerrar" type="submit" onClick={cerrar}>cerrar sesión</button>
          </div>
        </div>
    </header>
  )
}

export default Header;