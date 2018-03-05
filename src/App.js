import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import MyAppBar from './components/MyAppBar'

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

        <MyAppBar></MyAppBar>
        {this.props.children}
        
  
      </MuiThemeProvider>
    );
  }
}

export default App;








