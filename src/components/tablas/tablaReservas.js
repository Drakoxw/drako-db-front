import React from 'react';
import Encabezado from './encabezado';
import Fila from './filaReserv';
import './Tabla.css';
import Downloader from '../botones/botonDownl';


function TablaR({ value, pagi,
  operador,
  entidades= [],
  editarEntidad=() => {},
  crearReserva=() => {},
  eliminarEntidad=()=>{}
}) {
  //let hoy = new Date().getDate();
  //let mes = (new Date().getMonth()+1);

  switch (value) {

    case 'Todas Reservas':
      entidades = entidades.filter(entidad => entidad.Año )  
      break;
    case 'Reser. Aceptadas':
      entidades = entidades.filter(entidad => entidad.EstReserva === 'Aceptada' ||  entidad.EstReserva === 'Confirmada' )  
      break;
    case 'Reser. Pendientes':
      entidades = entidades.filter(entidad => entidad.EstReserva === 'Pendiente' ||  entidad.EstReserva === 'Por confirmar' )  
      break;
    case 'Reser. Rechazadas':
      entidades = entidades.filter(entidad => entidad.EstReserva === 'Rechazada' ||  entidad.EstReserva === 'Cancelada' )  
      break;
    case 'Reser. No usadas':
      entidades = entidades.filter(entidad => entidad.EstReserva === 'No usado' ||  entidad.EstReserva === '')  
      break;
    case 'Básica':
      entidades = entidades.filter(entidad => entidad.TipoReserva === 'Básica' )  
      break;
    case 'VIP':
      entidades = entidades.filter(entidad => entidad.TipoReserva === 'VIP' )  
      break;
    case 'Morena':
      entidades = entidades.filter(entidad => entidad.Discoteca === 'Morena' )  
      break;
    case 'Tabu':
      entidades = entidades.filter(entidad => entidad.Discoteca === 'Tabu' )  
      break;
    case 'London':
      entidades = entidades.filter(entidad => entidad.Discoteca === 'London' )  
      break;
    case 'Lupe':
      entidades = entidades.filter(entidad => entidad.Discoteca === 'Lupe' )  
      break;
  
    default:
      entidades = entidades.filter(entidad => entidad.Nombre === 'Nekomamushi')
      break;
  }


if (entidades.length > 0) { 
  return (
    <div id="contenedor" className="container">

      <Downloader data={entidades}/>

      <table className="table table-striped table-dark">
        <Encabezado operador={operador} pagi={pagi}/>
        <tbody id="clientes-tabla">
        {entidades.map((clientes, index) => (
          <Fila 
            cliente={clientes} 
            index={index} 
            id={clientes.id} 
            persona={clientes.NombreContacto} 
            editarEntidad={editarEntidad}
            crearReserva={crearReserva}
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
        <Encabezado operador={operador}/>
        <tbody id="clientes-tabla">
        <tr key='Cargandolo'><b>Cargando...</b></tr>
      </tbody>
      </table>
      </div>
    )
  }
}

export default TablaR;