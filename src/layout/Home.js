import React, {Component} from 'react';
import Header from '../components/header';

let Rtoken ;

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrarModal: false,
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
      return (
        <div>
          <Header titulo={titulo}/>
        </div>
      )
  }
}

export default Home;