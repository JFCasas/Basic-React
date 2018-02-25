import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';


import {indigo400,red500, yellow500, blue500, grey50} from 'material-ui/styles/colors'


import Title from './components/Title'
import data from './requests/places'

import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props){

    super(props)

    this.state = {

      numero: 0
    }

    this.updateNumero = this.updateNumero.bind(this)

    console.log(data)

  }

  updateNumero(){

      this.setState({

        numero: this.state.numero + 1

            
      })
  }

  places(){

    return data.places.map(place=>{

      return(

        <Card style={{"font-family":"'Roboto', sans-serif"}}>
          
          <CardMedia >

            <img className = "imagen"  src={process.env.PUBLIC_URL + place.imageUrl}  />
          
          </CardMedia>

          <CardTitle title={place.title}></CardTitle>

          <CardText >{place.description}</CardText>
        
        </Card>
      )

    })
  }

  render() {
    
    return (

      <MuiThemeProvider>
  
        <div className = "Header-background">
          
          <div  className = "container" style={{ "width":"70%", "margin" : "0 auto"}} >

            <div className = "titulo">
              
              <Title></Title> 
            
              <RaisedButton label="Crear Cuenta Gratuita" secondary={true} onClick={this.updateNumero}  />

            </div>

            
            <div style={{"background-color":grey50, "padding":"5em","margin-top":"1em"}}>
      
              <ul className = "lista">
                
                <Card style={{"font-family":"'Roboto', sans-serif"}}>
                  <CardHeader  style={{"font-weight":"bold"}}

                    title="Calificaciones con emociones"
                    avatar="images/experiencias.jpeg"
                    
                  />
                  <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                  </CardActions>
                  <CardText >

                    
                    Califica tus lugares con experiencias, no con números
                  
                  </CardText>
                </Card>

                <Card style={{"font-family":"'Roboto', sans-serif"}}>
                  <CardHeader  style={{"font-weight":"bold"}}
                    title="No Internet. No problemas"
                    avatar="images/internet.jpeg"
                    
                  />
                  <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                  </CardActions>
                  <CardText >
                    Esta página funciona sin Internet o en conexiones lentas
                  </CardText>
                </Card>

                <Card style={{"font-family":"'Roboto', sans-serif"}}>
                  <CardHeader  style={{"font-weight":"bold"}}
                    title="Tus lugares favoritos"
                    avatar="images/favoritos.jpeg"
                    
                  />
                  <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                  </CardActions>
                  <CardText >
                    Define tu lista de sitios favoritos
                  </CardText>
                </Card>
                            
              </ul>
            
            </div>

            <div className = "places">

              {this.places()}
              

            </div> 

          </div>

        </div>

      </MuiThemeProvider>
      


    );
  }
}

export default App;
