import React from 'react';
import { cerrar } from '../../services/serviceUser';
import '../nav/nav.css';
import dragon from './dragon_nav.png'
import Filtro from '../filtros'
import Filtro2 from '../filtros/filtros2'
import Filtro3 from '../filtros/filtroRev'


function Header({titulo, operador, pagi,
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
            <h2>{titulo}</h2>
            <button className="btn-cerrar" type="submit" onClick={cerrar}>cerrar sesión</button>

            {((operador ===  'prom'|| operador==='admin') && pagi==='clien' )  && <Filtro value={value} num={num} valueAdmin={valueAdmin} valueNum={valueNum}/>}

            { ((operador ===  'promAd'|| operador==='adminAd') && pagi==='reserv' )  && <Filtro3 value={value} num={num} valueAdmin={valueAdmin} valueNum={valueNum}/>}

            {((operador === 'admin' || operador === 'prom') && pagi==='depur') && <Filtro2 value={value} valueAdmin={valueAdmin} valueNum={valueNum} />}

          </div>
        </div>
    </header>
  )
}

export default Header;