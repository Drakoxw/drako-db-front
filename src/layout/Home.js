import React, {Component} from 'react';
import Header from '../components/header';
import Modal from '../components/modal';
import Tabla from '../components/tablas/tabla2';
import BotonAction from '../components/botones/botonAction';
import { getClientes, putCliente } from '../services/serviceClientes';


let Rtoken ;
const pagi = 'home';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrarModal: false,
      z: true,
      objeto : {},
      entidades: [],
      operador: 'min',
      method: 'POST',
      headerModalText: 'Nuevo registro',
      value: '',
      idObjeto:  '',
      num: NaN
    }
  }

  listar = async() => {
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
    this.listar()
    this.cambiarModal()
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
 
  componentDidMount() {
    this.listar()
    Rtoken = localStorage.getItem('token') || 'xxx'
    if (Rtoken.length < 20) {
      window.location.href="/" 
    }
    localStorage.setItem('var','')
  }

  render() {
    const { titulo } = this.props;
    const operador = (this.state.operador);
    const { entidades,z } = this.state;
    return (
      <div>
        <Header operador={operador} z={z}
          titulo={titulo} data={entidades}
        />

        <div className="conten4">

          <BotonAction cambiarModal={this.cambiarModal} />
          <Tabla 
            entidades={entidades}
            num={this.state.num} pagi={pagi}
            value={this.state.value}
            editarEntidad={this.editarEntidad}
            operador={this.state.operador}/>

          { this.state.mostrarModal && <Modal 
            objeto={this.state.objeto}
            headerModalText={this.state.headerModalText}
            crearEntidad={this.crearEditarEnt}
            operador={operador}
            cambiarModal={this.cambiarModal}
            manejarInput={this.manejarInput}/> }
                  
         </div>

      </div>
    )
  }
}

export default Home;