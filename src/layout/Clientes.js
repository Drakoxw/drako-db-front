import React, {Component} from 'react';
import Header from '../components/header';
import Tabla from '../components/tablas';

let Rtoken = 'xxx';
let operador = 'prom'

class Clientes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrarModal: false,
      objeto: {},
      value: '',
      num: NaN,
    }
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
    console.log(num);
  }


  componentDidMount() {
    Rtoken = localStorage.getItem('token') || 'xxx'
    if (Rtoken.length < 20) {
      window.location.href="/" 
    }
  }

  render() {
    const {titulo} = this.props;
    return (
      <div>
        <Header operador={operador} titulo={titulo}
        num={this.state.num}
        valueAdmin={this.manejarValue}
        valueNum={this.manejarNum}
        value={this.state.value}
        />
        <Tabla operador={operador} />
      </div>
    )
  }
}

export default Clientes;