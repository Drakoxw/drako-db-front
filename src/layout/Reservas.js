import React, {Component} from 'react';
import Header from '../components/header';
import Tabla from '../components/tablas/tablaReservas';

let Rtoken = 'xxx';
let operad = localStorage.getItem('role')
let operador = `${operad}Ad`

class Reservas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrarModal: false,
    }
  }
  componentDidMount() {
    Rtoken = localStorage.getItem('token') || 'xxx';
    if (Rtoken.length < 20) {
      window.location.href="/" 
    }
  }

  render() {
    const {titulo} = this.props;

    return (
      <div>
        <Header operador={operador} titulo={titulo}/>
        <div className="conten4">

          <Tabla operador={operador} />
        
        </div>
      </div>
    )
  }
}

export default Reservas;