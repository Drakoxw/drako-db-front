import React, {Component} from 'react';
import Header from '../components/header';
import Tabla from '../components/tablas/tablaReservas';
import Modal from '../components/modal';
import { getReservas, putReservas, deleteReservas } from '../services/serviceReservas';

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
    this.setState({ reservas: entidades})
  }

  modelarReserva = async( _objeto, id ) => {
    this.setState({ objeto: _objeto, idObjeto: id })
    this.cambiarModal()
  }

  editarReser = async() => {
    const { objeto, idObjeto } = this.state;
    await putReservas(idObjeto, objeto, 'PUT')
    this.cambiarModal()
    this.listar()
  }
  elimReserva = async(_objeto, id, persona) => {
    const ok = await prompt(`Desea eliminar reserva de ${persona} ? \n Escriba "Y" para confirmar`)
    if (ok && ok.toLowerCase() === 'y') {
      deleteReservas(id).then((x) => this.listar())
    } else {
      console.log('proceso interumpido');
    }
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

          <Tabla operador={operador} 
            entidades={this.state.reservas}
            eliminarEntidad={this.elimReserva}
            editarEntidad={this.modelarReserva}
          />
        
          { this.state.mostrarModal && <Modal 
            objeto={this.state.objeto}
            crearEntidad={this.editarReser}
            headerModalText={this.state.headerModalText}
            cambiarModal={this.cambiarModal}
            manejarInput={this.manejarInput}
            operador={operador}
          />}
        </div>
      </div>
    )
  }
}

export default Reservas;