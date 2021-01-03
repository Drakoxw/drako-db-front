import React, {Component} from 'react';
import Header from '../components/header';
import Tabla from '../components/tablas';
import { getClientes, putCliente } from '../services/serviceClientes';
import Modal from '../components/modal';
import BotonAction from '../components/botones/botonAction';


let Rtoken = 'xxx';
let operador = 'prom'

class Clientes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrarModal: false,
      objeto: {},
      entidades: [],
      method: 'POST',
      headerModalText: 'Nuevo registro',
      value: '',
      idObjeto: '',
      num: NaN,
    }
  }
  
  listar = async () => {
    const entidads = await getClientes()
    this.setState({ entidades: entidads })
  }
  cambiarModal =(_ev, method="POST", headerModalText="Nuevo registro") => {
    if (method === "POST") {
      this.setState({ objeto: {} })
    }
    this.setState({ mostrarModal: !this.state.mostrarModal, method, headerModalText  })
  }
  editarEntidad = async(_ev, id) => {
    let objetox;
    let objeto = { ...this.state.entidades };
    for (let el in objeto){
      if(objeto[el]._id === id) {objetox = objeto[el]}  
    }
    objeto= objetox
    this.setState({ objeto, idObjeto: id }, ()=> {
      this.cambiarModal(null, 'PUT', 'Editar cliente')
    })
  };
  crearEditarEnt = async() => {
    let { objeto, idObjeto, method } = this.state
    await putCliente(idObjeto, objeto, method)
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
    Rtoken = localStorage.getItem('token') || 'xxx'
    if (Rtoken.length < 20) {
      window.location.href="/" 
    }
  }

  render() {
    const {titulo} = this.props;
    const {entidades} = this.state;
    return (
      <div>
        <Header 
          operador={operador} titulo={titulo}
          num={this.state.num}
          valueAdmin={this.manejarValue}
          valueNum={this.manejarNum}
          value={this.state.value}
        />
        <BotonAction 
          cambiarModal={this.cambiarModal} 
        />

        <Tabla 
          value={this.state.value}
          num={this.state.num}
          operador={operador} 
          entidades={entidades}
          editarEntidad={this.editarEntidad}
        />


        { this.state.mostrarModal && <Modal 
          objeto={this.state.objeto}
          headerModalText={this.state.headerModalText}
          crearEntidad={this.crearEditarEnt}
          operador={operador}
          cambiarModal={this.cambiarModal}
          manejarInput={this.manejarInput}
        />}
      </div>
    )
  }
}

export default Clientes;