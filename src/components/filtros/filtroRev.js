import React from 'react';
import './Filtro.css';

function Filtro3({ value='',pagi,
  valueAdmin=()=>{},
  valueNum=()=>{} }) {
    console.log(`value`, value);
  if (!value || value === '' || value === 'Todas Reservas') {
    return (
      <div id="filtroComp">
      <div >
        <h5>Selecionar filtros</h5>
        <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
          <option hidden >Seleccione la reserva</option>
          <option>Todas Reservas</option>
          <option>Estado de Reserva</option>
          <option>Por tipo de Reserva</option>
          <option>Por Discoteca</option>
          <option>Promotor de Reserva</option>
        </select>
      </div>
    </div>
    )
  }
  
  if (value === 'Estado de Reserva' ||value === 'Reser. Aceptadas' || value === 'Reser. Pendientes' || value === 'Reser. Rechazadas'|| value === 'Reser. No usadas' ) {
    return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Todas Reservas</option>
            <option>Estado de Reserva</option>
            <option>Por tipo de Reserva</option>
            <option>Por Discoteca</option>
            <option>Promotor de Reserva</option>
          </select>
           <select name="Filtrar3" className="filtro1" id="filtro3" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el Estado</option>
            <option>Reser. Aceptadas</option>
            <option>Reser. Pendientes</option>
            <option>Reser. Rechazadas</option>
            <option>Reser. No usadas</option>
          </select>
        </div>
      </div>
    )
  }  
  if (value === 'Por tipo de Reserva' ||value === 'Básica' || value === 'VIP' ) {
  return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
    
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Todas Reservas</option>
            <option>Estado de Reserva</option>
            <option>Por tipo de Reserva</option>
            <option>Por Discoteca</option>
            <option>Promotor de Reserva</option>
          </select>
           <select name="Filtrar3" className="filtro1" id="filtro3" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el Tipo</option>
            <option>Básica</option>
            <option>VIP</option>
          </select>
        </div>
      </div>
    )
  } 
  if (value === 'Por Discoteca' ||value === 'Morena' || value === 'Tabu' ||value === 'London' || value === 'Lupe') {
  return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
    
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Todas Reservas</option>
            <option>Estado de Reserva</option>
            <option>Por tipo de Reserva</option>
            <option>Por Discoteca</option>
            <option>Promotor de Reserva</option>
          </select>
           <select name="Filtrar3" className="filtro1" id="filtro3" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione la discoteca</option>
            <option>Morena</option>
            <option>Tabu</option>
            <option>London</option>
            <option>Lupe</option>
          </select>
        </div>
      </div>
    )
  } 
  if (value === 'Promotor de Reserva' ||value === 'Promotor 1' || value === 'Promotor 2' || value === 'Promotor 3' ) {
    return (
      <div id="filtroComp">
        <div >
            <h5>Selecionar filtros</h5>
          </div>
        <div id="filter" className="form-group">
          
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Todas Reservas</option>
            <option>Estado de Reserva</option>
            <option>Por tipo de Reserva</option>
            <option>Por Discoteca</option>
            <option>Promotor de Reserva</option>
          </select>
           <select name="Filtrar3" className="filtro1" id="filtro3" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el Promotor</option>
            <option>Promotor 1</option>
            <option>Promotor 2</option>
            <option>Promotor 3</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Filtro3;
