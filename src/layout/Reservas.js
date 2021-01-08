import React, {Component} from 'react';
import Header from '../components/header';
import Tabla from '../components/tablas/tablaReservas';
import Modal from '../components/modal';
import { getReservas, putReservas, deleteReservas } from '../services/serviceReservas';

let Rtoken = 'xxx';
let operad = localStorage.getItem('role');
let operador = `${operad}Ad`;
let pag = 'reserv';

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
    this.setState({ objeto })
  }
  manejarValue = (ev, _num) => {
    let { target: {value} } = ev;
    const num = parseInt(_num);
    this.setState({ value, num })
  }
  manejarNum = (_num) => {
    const num = parseInt(_num);
    this.setState({ num })
  }


  componentDidMount() {
    this.listar()
    Rtoken = localStorage.getItem('token') || 'xxx';
    if (Rtoken.length < 20) {
      window.location.href="/" 
    }
    localStorage.setItem('var','')
  }

  render() {
    const {titulo} = this.props;
    const { reservas } = this.state
    return (
      <div>
        <Header 
          operador={operador} 
          num={this.state.num} data={reservas}
          valueAdmin={this.manejarValue}
          valueNum={this.manejarNum}
          value={this.state.value}
          titulo={titulo} pagi={pag}
        />
        
        <div className="conten4">

          <Tabla operador={operador} 
            entidades={this.state.reservas}
            value={this.state.value} pagi={pag}
            eliminarEntidad={this.elimReserva}
            editarEntidad={this.modelarReserva}
          />
        
          { this.state.mostrarModal && <Modal 
            objeto={this.state.objeto} pagi={pag}
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