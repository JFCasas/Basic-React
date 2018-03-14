import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CSSTransition from 'react-transition-group/CSSTransition'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import { withRouter } from 'react-router-dom'

import './App.css';

import MyAppBar from './components/MyAppBar'

class App extends Component {

  constructor(props){

    super(props)

    console.log(props.location.pathname)

    this.state = {

      numero: 0
    }

    this.updateNumero = this.updateNumero.bind(this)

    //console.log(data)

    this.goHome = this.goHome.bind(this)

  }

  updateNumero(){

      this.setState({

        numero: this.state.numero + 1

            
      })
  }

  goHome(){

      this.props.history.push('/')
  }

  

  render() {
    
    return (

      <MuiThemeProvider>

        <MyAppBar goHome = {this.goHome} ></MyAppBar>

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








