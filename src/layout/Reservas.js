import React, {Component} from 'react';
import Header from '../components/header';
import Tabla from '../components/tablas/tablaReservas';
import Modal from '../components/modal';
import { getReservas, putReservas } from '../services/serviceReservas';

let Rtoken = 'xxx';
let operad = localStorage.getItem('role')
let operador = `${operad}Ad`

class Reservas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrarModal: false,
      objeto: {},
      reservas: [],
      method: 'POST',
      headerModalText: 'Editar reserva',
      value: '',
      idObjeto: ''
    }
  }

  cambiarModal =(_ev) => {
    this.setState({ mostrarModal: !this.state.mostrarModal })
  }

  listar = async() => {
    const entidades = await getReservas()
    console.log(entidades);
    this.setState({ reservas: entidades})
  }

  editarReser = async() => {
    let { objeto, idObjeto} = this.state
    await putReservas(idObjeto, objeto,'PUT')
    this.cambiarModal()
    this.listar()
  }
  manejarInput = (ev) => {
    const { target: {value, name} } = ev;
    let {objeto} = this.state;
    objeto = { ...objeto, [name]: value }
    console.log(objeto);
    this.setState({ objeto })
  }

  componentDidMount() {
    this.listar()
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

          <Tabla operador={operador} entidades={this.state.reservas}/>
        
          { this.state.mostrarModal && <Modal 
            headerModalText={this.state.headerModalText}
            cambiarModal={this.state.cambiarModal}
            manejarInput={this.state.manejarInput}
            operador={operador}
          />}
        </div>
      </div>
    )
  }
}

export default Reservas;