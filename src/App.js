import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CSSTransition from 'react-transition-group/CSSTransition'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import { withRouter } from 'react-router-dom'

import './App.css';

import Navigation from './components/Navigation'

class App extends Component {

  constructor(props){

    super(props)

    console.log(props.location.pathname)

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

        <Navigation></Navigation>

        <TransitionGroup>
          
          <CSSTransition classNames="left-out" timeout = {300} 

          key= {this.props.location.pathname.split('/')[1]}>
            
            {this.props.children}  
          
          </CSSTransition>
          
          

        </TransitionGroup>
        
        
  
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);








