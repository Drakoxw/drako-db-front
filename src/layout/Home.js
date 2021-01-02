import React, {Component} from 'react';
import Header from '../components/header';
import Tabla from '../components/tablas/tabla2'

let Rtoken ;

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrarModal: false,
      operador: 'min',
      
    }
  }
 
  componentDidMount() {
    Rtoken = localStorage.getItem('token') || 'xxx'
    if (Rtoken.length < 20) {
      window.location.href="/" 
    }
  }

  render() {
    const {titulo} = this.props;
    const operador = (this.state.operador);
      return (
        <div>
          <Header operador={operador} titulo={titulo} />
          <Tabla 
            operador={this.state.operador}/>
        </div>
      )
  }
}

export default Home;