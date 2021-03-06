import React from 'react';
import Encabezado from './encabezado';
import Fila from './filaDep';
import './Tabla.css';
import Downloader from '../botones/botonDownl'


function TablaD({
  num,
  operador,
  value,
  clientes= [],
  reservas= [],
  editarEntidad=() => {},
  eliminarEntidad=()=>{}
}) {
  let hoy = new Date().getDate();
  let mes = (new Date().getMonth()+1);
  let entidades = []

  if(value === 'Reservas') {
    localStorage.setItem('var',value)
  }
  if(value === 'Clientes') {
    localStorage.setItem('var',value)
  }

  let cabioxs = localStorage.getItem('var')

  if (cabioxs === 'Reservas') {
    entidades = reservas
  } else {
    entidades = clientes
  }
  

  switch (value) {
    case 'Todas Reservas':
      entidades = entidades.filter(entidad => entidad.Contacto)
      break;  
      case 'Reser. Pendientes':
        entidades = entidades.filter(entidad => entidad.EstReserva === 'Por confirmar' || 
        entidad.EstReserva === 'Pendiente')
        break;  
      case 'Reser. No usadas':
        entidades = entidades.filter(entidad => entidad.EstReserva === 'No usado')
        break; 
      case 'Reser. Rechazadas':
        entidades = entidades.filter(entidad => entidad.EstReserva === 'Cancelada' || 
        entidad.EstReserva === 'Rechazada')
        break; 
      case 'Reser. Aceptadas':
        entidades = entidades.filter(entidad => entidad.EstReserva === 'Confirmada' || 
        entidad.EstReserva === 'Aceptada')
        break; 
      case 'Básica':
        entidades = entidades.filter(entidad => entidad.TipoReserva === 'Básica')
        break; 
      case 'VIP':
        entidades = entidades.filter(entidad => entidad.TipoReserva === 'VIP')
        break;  
      case 'Aceptadas':
        entidades = entidades.filter(entidad => entidad.EstadoReserva === 'Aceptada')
        break;   
      case 'Pendientes':
        entidades = entidades.filter(entidad => entidad.EstadoReserva === 'Pendiente')
        break;   
      case 'Rechazadas':
        entidades = entidades.filter(entidad => entidad.EstadoReserva === 'Rechazada')
        break;   
      case 'No Usado':
        entidades = entidades.filter(entidad => entidad.EstadoReserva === 'No usado')
        break; 
        ///777777777777777777777777777777777777777777777777777777 
      
      
    case 'Masculino':
      entidades = entidades.filter(entidad => entidad.Sexo === 'Masculino')
      break;
    case 'Morena':
      entidades = entidades.filter(entidad => entidad.Discoteca === 'Morena')
      break;
    case 'Tabu':
      entidades = entidades.filter(entidad => entidad.Discoteca === 'Tabu')
      break;
    case 'Lupe':
      entidades = entidades.filter(entidad => entidad.Discoteca === 'Lupe')
      break;
    case 'London':
      entidades = entidades.filter(entidad => entidad.Discoteca === 'London')
      break;   
    case 'Femenino':
      entidades = entidades.filter(entidad => entidad.Sexo === 'Femenino')
      break;
    case 'Otro':
      entidades = entidades.filter(entidad => entidad.Sexo === 'Otro')
      break; //
    case 'En uso':
      entidades = entidades.filter(entidad => entidad.ContactoActivo === 'En uso')
      break; 
    case 'Solo llamadas':
      entidades = entidades.filter(entidad => entidad.ContactoActivo === 'Solo llamadas')
      break; 
    case 'No contesta':
      entidades = entidades.filter(entidad => entidad.ContactoActivo === 'No contesta')
      break;  
    case 'No usado':
      entidades = entidades.filter(entidad => entidad.ContactoActivo === 'No usado')
      break; 
    case 'Solo whatsapp':
      entidades = entidades.filter(entidad => entidad.ContactoActivo === 'Solo whatsapp')
      break; 
    case 'No funciona':
      entidades = entidades.filter(entidad => entidad.ContactoActivo === 'No funciona')
      break; ////
      ////////////////////////////7
      ///////////////////////////7
    case 'Este Mes':
      entidades = entidades.filter(entidad => entidad.Mes === mes)
      break; 
    case 'Enero':
      entidades = entidades.filter(entidad => entidad.Mes === 1 || entidad.Mes === '01' || entidad.Mes === '1')
      if (num) {
        entidades = entidades.filter(entidad => entidad.Dia === num)
      }
      break; 
    case 'Febrero':
      entidades = entidades.filter(entidad => entidad.Mes === 2)
      if (num) {
        entidades = entidades.filter(entidad => entidad.Dia === num)
      }
      break; 
    case 'Marzo':
      entidades = entidades.filter(entidad => entidad.Mes === 3)
      if (num) {
        entidades = entidades.filter(entidad => entidad.Dia === num)
      }
      break; 
    case 'Abril':
      entidades = entidades.filter(entidad => entidad.Mes === 4)
      if (num) {
        entidades = entidades.filter(entidad => entidad.Dia === num)
      }
      break;  
    case 'Mayo':
      entidades = entidades.filter(entidad => entidad.Mes === 5)
      if (num) {
        entidades = entidades.filter(entidad => entidad.Dia === num)
      }
      break; 
    case 'Junio':
      entidades = entidades.filter(entidad => entidad.Mes === 6)
      if (num) {
        entidades = entidades.filter(entidad => entidad.Dia === num)
      }
      break; 
    case 'Julio':
      entidades = entidades.filter(entidad => entidad.Mes === 7)
      if (num) {
        entidades = entidades.filter(entidad => entidad.Dia === num)
      }
      break; 
    case 'Agosto':
      entidades = entidades.filter(entidad => entidad.Mes === 8)
      if (num) {
        entidades = entidades.filter(entidad => entidad.Dia === num)
      }
      break;  
    case 'Septiembre':
      entidades = entidades.filter(entidad => entidad.Mes === 9)
      if (num) {
        entidades = entidades.filter(entidad => entidad.Dia === num)
      }
      break; 
    case 'Octubre':
      entidades = entidades.filter(entidad => entidad.Mes === 10)
      if (num) {
        entidades = entidades.filter(entidad => entidad.Dia === num)
      }
      break; 
    case 'Noviembre':
      entidades = entidades.filter(entidad => entidad.Mes === 11)
      if (num) {
        entidades = entidades.filter(entidad => entidad.Dia === num)
      }
      break; 
    case 'Diciembre':
      entidades = entidades.filter(entidad => entidad.Mes === 12)
      if (num) {
        entidades = entidades.filter(entidad => entidad.Dia === num )
      }
      break; 
    case 'Próximo Mes':
      let meX = mes === 12? mes = 1: mes = mes + 1
      entidades = entidades.filter(entidad => entidad.Mes === meX)
      break; 
    case 'Todos':
      entidades = entidades.filter(entidad => entidad.Dia )
      break; 
    case 'Una Semana':
      entidades = entidades.filter(entidad => entidad.Mes === mes || entidad.Mes === (mes+1))
      entidades = entidades.filter(entidad => entidad.Dia > hoy)
      entidades = entidades.filter(entidad => entidad.Dia < (hoy+8) )
      break; 
    case 'Dos Semanas':
      entidades = entidades.filter(entidad => entidad.Mes === mes || entidad.Mes === (mes+1))
      entidades = entidades.filter(entidad => entidad.Dia > hoy)
      entidades = entidades.filter(entidad => entidad.Dia < (hoy+16) )
      break; 
    case 'Tres Semanas':
      entidades = entidades.filter(entidad => entidad.Mes === mes || entidad.Mes === (mes+1))
      entidades = entidades.filter(entidad => entidad.Dia > hoy)
      entidades = entidades.filter(entidad => entidad.Dia < (hoy+22) )
      break; 
    default:
      entidades = entidades.filter(entidad => entidad.Nombre === 'Nekomamushi')
      break;
  }  
  

if (entidades.length) { 
  return (
    <div id="contenedor" className="container">

      <Downloader data={entidades}/>

      <table className="table table-striped table-dark">

        <Encabezado value={value} operador={operador}  />

        <tbody id="clientes-tabla">
        {entidades.map((clientes, index) => (
          <Fila 
            cliente={clientes} 
            index={index} 
            editarEntidad={editarEntidad}
            eliminarEntidad={eliminarEntidad}/>
        ))}
      </tbody>
      </table>
    </div>
  )
  }else {
    return (
      <div id="contenedor" className="container">
      <table className="table table-striped table-dark">
        <Encabezado value={value} operador={operador}/>
        <tbody id="clientes-tabla">
          <tr key='Cargandolo2'><b>Esperando...</b></tr>
        </tbody>
      </table>
      </div>
    )
  }
}

export default TablaD;