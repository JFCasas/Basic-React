import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './pages/Home'
import Login from './pages/Login'

import logo from './logo.svg';
import './App.css';

import {

  BrowserRouter as Router,
  Link,
  Route

} from 'react-router-dom';


class App extends Component {

  constructor(props){

    super(props)

    this.state = {

      numero: 0
    }

    this.updateNumero = this.updateNumero.bind(this)

    //console.log(data)

  }

  updateNumero(){

      this.setState({

        numero: this.state.numero + 1

            
      })
  }

  

  render() {
    
    return (

      <MuiThemeProvider>

        <Router>

          <div>

            <Link to="/login">Login</Link>

            <Link to="/">Home</Link>

            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>

          </div>

          

          
        
        </Router>

        
  
      </MuiThemeProvider>
    );
  }
}

export default App;








