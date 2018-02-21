import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title'

class App extends Component {

  constructor(props){

    super(props)

    this.state = {

      numero: 0
    }

    setInterval(()=>{

      this.setState({

        numero: this.state.numero + 1
      
      })
    
    },1000)
  }

  render() {
    return (

      <section>
  
        <div>
          
          <div>

            <Title></Title> 
            <h2>{this.state.numero}</h2>
            <button>Crear Cuenta Gratuita</button>
            <img src={process.env.PUBLIC_URL + '/images/places1.jpeg'} height="200"/>
            <div>
      
              <ul>
                
                <li>
                  
                  <h3>Calificaciones con emociones</h3>
                  <p>Califica tus lugares con experiencias, no con números</p>
                
                </li>

                <li>
                  
                  <h3>No Internet. No problemas</h3>
                  <p>Esta página funciona sin Internet o en conexiones lentas</p>
                
                </li>

                <li>
                  
                  <h3>Tus lugares favoritos</h3>
                  <p>Define tu lista de sitios favoritos</p>
                
                </li>
              
              </ul>
            
            </div>

          </div>
        
        </div>

      </section>
      


    );
  }
}

export default App;
