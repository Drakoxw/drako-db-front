import React, {Component} from 'react';
import Header from '../components/header';
import Tabla from '../components/tablas/tablaDep';
import { getClientes, putCliente, deleteCliente } from '../services/serviceClientes';
import { getReservas, deleteReservas, putReservas } from '../services/serviceReservas' ;
import Modal from '../components/modal';

let Rtoken = 'xxx';
let operador = localStorage.getItem('role');
let pag = 'depur';


class Depurar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrarModal: false,
      objeto: {},
      clientes: [],
      reservas: [],
      method: 'POST',
      headerModalText: 'Nuevo registro',
      value: '',
      idObjeto: '',
      num: NaN,
    }
  }
 
  listar = async () => {
    const entidads = await getClientes()
    this.setState({ clientes: entidads })
  }
  listarR = async() => {
    const entidadR = await getReservas();
    this.setState({ reservas: entidadR })
  }

  cambiarModal =(_ev, method="POST", headerModalText="Nuevo registro") => {
    if (method === "POST") {
      this.setState({ objeto: {} })
    }
    this.setState({ mostrarModal: !this.state.mostrarModal, method, headerModalText  })
  }
  editarEntidad = async(_objet, id) => {
    this.setState({ objeto: _objet, idObjeto: id }, ()=> {
      this.cambiarModal(null, 'PUT', 'Editar cliente')
    })
  };
  crearEditarEnt = async() => {
    let { objeto, idObjeto, method } = this.state
    if (objeto.Nombre) {
      putCliente(idObjeto, objeto, method)
      this.listar()
      this.cambiarModal()
    } else {
      putReservas(idObjeto, objeto, method)
      this.listarR()
      this.cambiarModal()
    } 
  }

  eliminarEntidad = async(_ev, id, persona ) => {
    const ok = await prompt(`Desea eliminar a ${persona} ? \n Escriba "Y" para confirmar`)
    if (ok && ok.toLowerCase() === 'y') {
      deleteReservas(id).then((x) => this.listar())
      deleteCliente(id).then((x) => this.listar())
      this.listar()
      this.listarR()
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
    this.listarR()
    Rtoken = localStorage.getItem('token') || 'xxx'
    if (Rtoken.length < 20) {
      window.location.href="/" 
    }
  }

  render() {
    const {titulo} = this.props;
    const { clientes, reservas, objeto } = this.state;
    return (
      <div>
        <Header 
          operador={operador} titulo={titulo}
          valueAdmin={this.manejarValue}
          valueNum={this.manejarNum}
          value={this.state.value}
          pagi={pag}
        />

        <div className="conten4">
          <Tabla 
            value={this.state.value}
            num={this.state.num}
            operador={operador} 
            clientes={clientes}
            reservas={reservas}
            editarEntidad={this.editarEntidad}
            cambiar={this.cambiar}
            eliminarEntidad={this.eliminarEntidad}
          />
  
          { this.state.mostrarModal && <Modal 
            objeto={objeto}
            headerModalText={this.state.headerModalText}
            crearEntidad={this.crearEditarEnt}
            operador={operador}
            cambiarModal={this.cambiarModal}
            manejarInput={this.manejarInput}
          />}
        
        </div>
      </div>
    )
  }
}

export default Depurar;