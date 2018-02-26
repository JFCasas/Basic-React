import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './pages/Home'

import logo from './logo.svg';
import './App.css';


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

        <Home ></Home>
  
      </MuiThemeProvider>
    );
  }
}

export default App;
