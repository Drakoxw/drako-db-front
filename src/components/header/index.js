import React from 'react';
import { cerrar } from '../../services/serviceUser';
import '../nav/nav.css';
import dragon from './dragon_nav.png'
import Filtro from '../filtros'
import Filtro2 from '../filtros/filtros2'


function Header({titulo, operador,
  value , num,
  valueAdmin=()=>{},
  valueNum=()=>{}
}) {
  return (
    <header>
      <div className="nav-body" >
          <div className="conten2">
            <img className="img-drak" alt="Drako db logo" src={dragon} ></img>
          </div>
          <div className="conten3">
            <h2>{titulo.titulo}</h2>
            { operador === 'prom'   && <Filtro value={value} num={num} valueAdmin={valueAdmin} valueNum={valueNum}
            />}
            { operador === 'admin' && <Filtro2 value={value} valueAdmin={valueAdmin} valueNum={valueNum} /> }
            <button className="btn-cerrar" type="submit" onClick={cerrar}>cerrar sesión</button>
          </div>
        </div>
    </header>
  )
}

export default Header;