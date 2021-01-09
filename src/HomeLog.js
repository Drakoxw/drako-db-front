import React, {Component} from 'react';
import Login from './components/login';
import { login } from './services/serviceUser'
//import Cookie from 'universal-cookie'

//const cook = new Cookie();
let Rtoken = 'xxx';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logindata: {},
      token: ''
    }
  }
  setear =()=> {
    Rtoken = localStorage.setItem('token','xx2')
  }

  loguear = (ev) => {
    const { name, value } = ev.target;
    let logindat = {...this.state.logindata,[name]:value}
    this.setState({ logindata:logindat })    
  }

  loguearok = async(ev) =>{
    ev.preventDefault();
    const data = await ev.target;
    let {Email, Pass} = await this.state.logindata;
    if (data.name) {
      login(Email, Pass)
      .then((x) => {
        console.log('respusta ',x);
    })
    }
    this.setState({ token: localStorage.getItem('token') })
    setInterval(() => {
      if (data) {
        console.log(`okFull`);
        window.location.href="/home"
      }
    }, 500);
    
  }

  componentDidMount () {
    this.setear()
    Rtoken = localStorage.getItem('token') || 'xxx'
    if (Rtoken.length > 20) {
      window.location.href="/home" 
    }
    //Rtoken = localStorage.getItem('token') || 'xx2'
  }

  render() {
      return (
        <div>
          {<Login 
          loguear={this.loguear}
          loguearok={this.loguearok} />}
        </div>
      )
  }
}

export default Home;