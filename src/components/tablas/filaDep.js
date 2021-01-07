import React from 'react';
import Boton from '../botones';

let key = ['Nombre','Telefono','Cumple','Sexo','Discoteca','Correo', 'Contacto','Reserva','Motivo','Fecha','Tipo'];

function FilaD({ index,cliente,
  editarEntidad=()=>{},
  eliminarEntidad=()=>{} 
}) {
  if (!cliente.Sexo) {
    return (
      <tr id="tr">
        <th id="datos" scope="row">{index+1}</th>
        <th key={`Nombre>${index+1}`}>{cliente.Contacto}</th>
        <th key={`Telefono>${index+1}`}>{cliente.Telefono}</th>
        <th key={`Fecha>${index+1}`}>{cliente.FechaReserva}</th>
        <th key={`Discoteca>${index+1}`}>{cliente.Discoteca}</th>
        <th key={`Estado>${index+1}`}>{cliente.EstReserva}</th>
        <th key={`Motivo>${index+1}`}>{cliente.MotReserva}</th>
        <th key={`Opciones>${index+1}`}>
        <div className="btn-group" aria-label="Basic Example">
          <Boton tipo="editar" onClick={editarEntidad} id={cliente._id} objeto={cliente}/>
          <Boton tipo="eliminar" onClick={eliminarEntidad} id={cliente._id} persona={cliente.Contacto}/>
        </div>
        </th>
      </tr>
    )  
  } else {
    return (
      <tr id="tr">
        <th id="datos" scope="row">{index+1}</th>
        <th key={`${key[0]}=>${index+1}`}>{cliente.Nombre}</th>
        <th key={`${key[1]}=>${index+1}`}>{cliente.Telefono}</th>
        <th key={`${key[2]}=>${index+1}`}>{cliente.Dia}-{cliente.Mes}-{cliente.Año}</th>
        <th key={`${key[3]}=>${index+1}`}>{cliente.Sexo}</th>
        <th key={`${key[4]}=>${index+1}`}>{cliente.Discoteca}</th>
        <th key={`${key[6]}=>${index+1}`}>{cliente.ContactoActivo}</th>
        <th key={`${key[8]}=>${index+1}`}>
        <div className="btn-group" aria-label="Basic Example">
          <Boton tipo="editar" onClick={editarEntidad} id={cliente._id} objeto={{
            Nombre: cliente.Nombre,
            Telefono:cliente.Telefono,
            Dia: cliente.Dia,
            Mes: cliente.Mes,
            Año: cliente.Año,
            Sexo: cliente.Sexo,
            Discoteca: cliente.Discoteca,
            ContactoActivo: cliente.ContactoActivo
          }}/>
          <Boton tipo="eliminar" onClick={eliminarEntidad} id={cliente._id} persona={cliente.Nombre}/>
        </div>
        </th>
      </tr>
    )  
  }
 
}

export default FilaD;