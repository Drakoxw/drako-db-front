import React from 'react';
import Boton from '../botones';

let keys = ['Nombre','Telefono','Fecha','Discoteca','Est reserva', 'Motivo','tipo', 'Cumpleañero', 'observacion', 'opciones'];

function FilaR({ index,cliente,
  editarEntidad=()=>{},
  eliminarEntidad=()=>{}
}) {
  return (
    <tr id="tr">
      <th id="datos" scope="row">{index+1}</th>
      <th key={`${keys[0]}=>${index+1}`}>{cliente.Contacto}</th>
      <th key={`${keys[1]}=>${index+1}`}>{cliente.Telefono}</th>
      <th key={`${keys[2]}=>${index+1}`}>{cliente.FechaReserva}</th>
      <th key={`${keys[3]}=>${index+1}`}>{cliente.Discoteca}</th>
      <th key={`${keys[4]}=>${index+1}`}>{cliente.EstReserva}</th>
      <th key={`${keys[5]}=>${index+1}`}>{cliente.MotReserva}</th>
      <th key={`${keys[6]}=>${index+1}`}>{cliente.TipoReserva}</th>
      <th key={`${keys[7]}=>${index+1}`}>{cliente.Cumpleañero}</th>
      <th key={`${keys[8]}=>${index+1}`}>{cliente.Observaciones}</th>
      <th key={`${keys[9]}=>${index+1}`}>
      <div className="btn-group" aria-label="Basic Example">
        <Boton tipo="editar" onClick={editarEntidad}  id={cliente._id} objeto={
          { Contacto :cliente.Contacto,
            Telefono: cliente.Telefono,
            FechaReserva: cliente.FechaReserva,
            Discoteca: cliente.Discoteca,
            EstReserva: cliente.EstReserva,
            MotReserva: cliente.MotReserva,
            TipoReserva: cliente.TipoReserva,
            Cumpleañero: cliente.Cumpleañero,
            Observaciones: cliente.Observaciones
          }
        }/>
        <Boton tipo="eliminar" onClick={eliminarEntidad} persona={cliente.Contacto} id={cliente._id} />
      </div>
      </th>
    </tr>
  )  
}

export default FilaR;