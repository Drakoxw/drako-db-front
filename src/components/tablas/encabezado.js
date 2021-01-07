import React from 'react';



function Encabezado({ operador, value, pagi}) {
  
  let cambio = localStorage.getItem('var') 


  if (pagi === 'home' ) {
    return (
      <thead className="min">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Telefono</th>
          <th scope="col">Cumpleaños</th>
          <th scope="col">Sexo</th>
          <th scope="col">Discoteca</th>
          <th scope="col">Correo</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
    )
  } 
  if ((operador === 'prom' && pagi=== 'clien')||(operador === 'admin' && pagi=== 'clien')) {
    return (
      <thead className="cliente-client">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Telefono</th>
          <th scope="col">Cumpleaños</th>
          <th scope="col">Sexo</th>
          <th scope="col">Discoteca</th>
          <th scope="col">Correo</th>
          <th scope="col">Estado del contacto</th>
          <th scope="col">Estado de reserva</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
    )
  }
  if ( (operador === 'prom' && cambio==='Clientes') || (operador === 'admin' && cambio=== 'Clientes') ) {
    return (
      <thead className="client-admin">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Telefono</th>
          <th scope="col">Cumpleaños</th>
          <th scope="col">Sexo</th>
          <th scope="col">Discoteca</th>
          <th scope="col">Estado del contacto</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
    )
  } 
  
  if ( (operador === 'prom' && cambio==='Reservas') || (operador === 'admin' && cambio=== 'Reservas') ) {
    return (
      <thead className=" reserv reserv-admin">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Contacto</th>
          <th scope="col">Telefono</th>
          <th scope="col">Fecha Reserva</th>
          <th scope="col">Discoteca</th>
          <th scope="col">Est. Reserva</th>
          <th scope="col">Motivo Reserva</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
    )
  } 
 
  if ((operador === 'promAd' && pagi === 'reserv') || (operador === 'adminAd' && pagi === 'reserv')) {
    return (
      <thead className="reserv">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Contacto</th>
          <th scope="col">Telefono</th>
          <th scope="col">Fecha Reserva</th>
          <th scope="col">Discoteca</th>
          <th scope="col">Est. Reserva</th>
          <th scope="col">Motivo Reserva</th>
          <th scope="col">Tipo Reserva</th>
          <th scope="col">Cumpleañero</th>
          <th scope="col">Observación</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
    )
  } 
 
  if (!value || value === '' || cambio === '') {
    return (
      <thead>
        <tr>
          <th><b>{`-----------   SELECIONA UN FILTRO    -----------`}</b></th>
        </tr>
      </thead>
    )
  }
 
}

export default Encabezado;