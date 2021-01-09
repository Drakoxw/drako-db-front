import React from 'react';
import './login.css'

function Login({ 
  loguear=()=>{},
  set=()=>{},
  loguearok=()=>{} 
}) {
  return (
    <div className="div-form">
      <form>
        <p className="parr-ini">INICIA SESION</p>
        <h5>invitado: dragon.xw@g.com / 12345</h5>
        <div className="body-form">
          <label htmlFor="email">Correo</label>
          <input id="email" name="Email" type="email" onChange={loguear}></input>
          <label htmlFor="passw">Contraseña</label>
          <input id="passw" type="password" name="Pass" onChange={loguear}></input>
          <input type="submit" name="ok" className="boton-form"  onClick={loguearok}  value="Enviar"></input>
        </div>
      </form>
    </div>
  )
}

export default Login;