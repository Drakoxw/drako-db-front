import React from 'react';
import HeaderModal from './modalHeader';
import FooterModal from './modalFooter';

import './modal.css';

function Modal({ 
  cambiarModal=() => {},
  crearEntidad=() => {},
  manejarInput = () => {},
  objeto = {},
  pagi,
  operador = '',
  headerModalText = '',
  }) {
    if (operador === 'min') {
      return (
        <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <HeaderModal cambiarModal={cambiarModal} HeaderModalText={headerModalText}/>
            <div className="modal-body " id="modal-body">
                <div className="form-group-m">

                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" className="form-control" id="nombre" name="Nombre" placeholder="Nombre Cliente" required onInput={manejarInput} value={objeto.Nombre}/>

                  <label htmlFor="telefono">Telefono</label>
                  <input type="tel" className="form-control" id="telefono" name="Telefono" placeholder="Contacto del cliente" required onInput={manejarInput} value={objeto.Telefono} />

                  <div className="form-group-m">
                    <label htmlFor="sexo">Sexo</label>
                    <select className="form-control sexo" name="Sexo" id="sexo" required onChange={manejarInput} value={objeto.Sexo}>
                      <option hidden >Seleccione el género</option>
                      <option>Masculino</option>
                      <option>Femenino</option>
                      <option>Otro</option>
                    </select>
                  </div>
                
                  <div className="cumple">
                    <label htmlFor="dia mes año" className="cumple-label">Cumpleaños</label>
                    <div className="cumple-content">
                      <input type="number" className="form-control cumplex" name="Dia" id="dia" placeholder="Dia" required onInput={manejarInput} value={objeto.Dia}/>
                      <input type="number" className="form-control cumplex" name="Mes" id="mes" placeholder="Mes" required onInput={manejarInput} value={objeto.Mes}/>
                      <input type="number" className="form-control cumplex" name="Año" id="año" placeholder="Año" required onInput={manejarInput} value={objeto.Año} />
                    </div>
                  </div>
                  
                  <label htmlFor="discoteca">Discoteca</label>
                  <input type="text" className="form-control" id="discoteca" name="Discoteca" placeholder="Discoteca donde se tomo el cliente" required onInput={manejarInput} value={objeto.Discoteca}/>

                  <label htmlFor="correo">Correo</label>
                  <input type="text" className="form-control" name="Correo"id="correo" placeholder="Email" required onInput={manejarInput} value={objeto.Correo} />
                
                </div>
            </div>
            <FooterModal cambiarModal={cambiarModal} crearEntidad={crearEntidad}/>
          </div>
        </div>
      </div>  
      )
    } 
    if (pagi === 'reserv') {
      return (
        <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <HeaderModal cambiarModal={cambiarModal} HeaderModalText={headerModalText}/>
            <div className="modal-body " id="modal-body">
              <div className="form-group-m">

                <label htmlFor="nombre">Contacto</label>
                <input type="text" className="form-control" id="nombre" name="Contacto" placeholder="Cliente" required onInput={manejarInput} value={objeto.Contacto}/>

                <label htmlFor="telefono">Telefono</label>
                <input type="tel" className="form-control" id="telefono" name="Telefono" placeholder="Contacto del cliente" required onInput={manejarInput} value={objeto.Telefono} />
                
                <label htmlFor="fecha">Fecha de la Reserva</label>
                <input type="text" className="form-control" id="fecha" name="FechaReserva" placeholder="Ingresar el dia y la fecha de reserva" required onInput={manejarInput} value={objeto.FechaReserva}/>

                <label htmlFor="discoteca">Discoteca</label>
                <input type="text" className="form-control" id="discoteca" name="Discoteca" placeholder="Discoteca donde se tomo el cliente" required onInput={manejarInput} value={objeto.Discoteca}/>

                <div className="form-group-m">
                  <label htmlFor="estado">Estado de la Reserva</label>
                  <select className="form-control estado" name="EstReserva" id="estado" required onChange={manejarInput} value={objeto.EstReserva}>
                    <option hidden >Confirmación de la Reserva</option>
                    <option>Confirmada</option>
                    <option>Por confirmar</option>
                    <option>Cancelada</option>
                  </select>
                </div>

                <div className="form-group-m">
                  <label htmlFor="motivo">Motivo de la Reserva</label>
                    <select className="form-control motivo" name="MotReserva" id="motivo" required onChange={manejarInput} value={objeto.MotReserva}>
                      <option hidden >Motivo de la Reserva</option>
                      <option>Cumpleaños</option>
                      <option>Otro</option>
                    </select>
                </div>

                <div className="form-group-m">
                  <label htmlFor="tipo">Tipo de Reserva</label>
                  <select className="form-control tipo" name="TipoReserva" id="tipo" required onChange={manejarInput} value={objeto.TipoReserva}>
                    <option hidden >Tipo de Reserva</option>
                    <option>Básica</option>
                    <option>VIP</option>
                  </select>
                </div>

                <label htmlFor="cumpleañero">Cumpleañero</label>
                <input type="text" className="form-control" name="Cumpleañero"id="cumpleañero" placeholder="Nombre del Cumpleañero" onInput={manejarInput} value={objeto.Cumpleañero} />

                <label htmlFor="observaciones">Observaciones</label>
                <input type="text" className="form-control" name="Observaciones"id="observaciones" placeholder="Recomendaciones/Peticiones del Cliente" required onInput={manejarInput} value={objeto.Observaciones} />
                
              </div>
            </div>
            <FooterModal cambiarModal={cambiarModal} crearEntidad={crearEntidad}/>
          </div>
        </div>
      </div>  
      )
    } else {
      return (
      <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <HeaderModal cambiarModal={cambiarModal} HeaderModalText={headerModalText}/>
            <div className="modal-body " id="modal-body">
                <div className="form-group-m">
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" className="form-control" id="nombre" name="Nombre" placeholder="Nombre Cliente" required onInput={manejarInput} 
                  value={objeto.Nombre}/>
                  <label htmlFor="telefono">Telefono</label>
                  <input type="tel" className="form-control" id="telefono" name="Telefono" placeholder="Contacto del cliente" required onInput={manejarInput} value={objeto.Telefono} />
                  <div className="form-group-m">
                    <label htmlFor="sexo">Sexo</label>
                    <select className="form-control sexo" name="Sexo" id="sexo" required onChange={manejarInput} value={objeto.Sexo}>
                      <option hidden >Seleccione el género</option>
                      <option>Masculino</option>
                      <option>Femenino</option>
                      <option>Otro</option>
                    </select>
                  </div>
                
                  <div className="cumple">
                    <label htmlFor="dia mes año" className="cumple-label">Cumpleaños</label>
                    <div className="cumple-content">
                      <input type="number" className="form-control cumplex" name="Dia" id="dia" placeholder="Dia" required onInput={manejarInput} value={objeto.Dia}/>
                      <input type="number" className="form-control cumplex" name="Mes" id="mes" placeholder="Mes" required onInput={manejarInput} value={objeto.Mes}/>
                      <input type="number" className="form-control cumplex" name="Año" id="año" placeholder="Año" required onInput={manejarInput} value={objeto.Año} />
                    </div>
                  </div>
                  
              
                  <label htmlFor="discoteca">Discoteca</label>
                  <input type="text" className="form-control" id="discoteca" name="Discoteca" placeholder="Discoteca donde se tomo el cliente" required onInput={manejarInput} value={objeto.Discoteca}/>
                  <label htmlFor="correo">Correo</label>
                  <input type="text" className="form-control" name="Correo"id="correo" placeholder="Email" required onInput={manejarInput} value={objeto.Correo} />
                
                </div>
                <div className="form-group-m">
                  <label htmlFor="est-contacto">Estado del contacto</label>
                  <select className="form-control est-contacto" id="est-contacto" name="ContactoActivo" required onChange={manejarInput} value={objeto.ContactoActivo}>
                    <option hidden >Seleccione el estado del contacto</option>
                    <option>En uso</option>
                    <option>Solo llamadas</option>
                    <option>No contesta</option>
                    <option>Solo whatsapp</option>
                    <option>No funciona</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="form-group-m">
                  <label htmlFor="est-reserva">Estado de la reserva</label>
                  <select className="form-control est-reserva" id="est-reserva" name="EstadoReserva" required onChange={manejarInput} value={objeto.EstadoReserva} >
                    <option hidden >Seleccione el estado de la reserva</option>
                    <option>Rechazada</option>
                    <option>Aceptada</option>
                    <option>Pendiente</option>
                  </select>
                </div>
            </div>
            <FooterModal cambiarModal={cambiarModal} crearEntidad={crearEntidad}/>
          </div>
        </div>
      </div>  
      )
    }
}

export default Modal;