import React from 'react'

import TransitionGroup from 'react-transition-group/TransitionGroup'

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';

import {indigo400,red500, yellow500, blue500, grey50} from 'material-ui/styles/colors'

import Title from '../components/Title'
import data from '../requests/places'
import PlaceCard from '../components/PlaceCard'

import Board from '../components/Board'

export default class Home extends React.Component {

	constructor(props){

	    super(props)

	    this.state = {

	      places:data.places
	    
	    }

	    this.hidePlace = this.hidePlace.bind(this)

	}
	
	places(){

	    return this.state.places.map((place,index)=>{

	      return(

	        <PlaceCard place={place} index={index} onRemove={this.hidePlace}></PlaceCard>
	      )

	    })
	}

	hidePlace(place){

		this.setState({

			places : this.state.places.filter(el => el != place)

		})
	}


	render(){

		return (

			<div className = "Header-background">
          
	          <div  className = "container" style={{ "width":"70%", "margin" : "0 auto"}} >

	            <div className = "titulo">
	              
	              <Title></Title> 
	            
	              <RaisedButton label="Crear Cuenta Gratuita" secondary={true} onClick={this.updateNumero}  />

	            </div>

	            
	            <div style={{"backgroundColor":grey50, "padding":"5em","marginTop":"1em"}}>
	      
	              <ul className = "lista">
	                
	                <Card style={{"fontFamily":"'Roboto', sans-serif"}}>
	                  <CardHeader  style={{"fontWeight":"bold"}}

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

	                <Card style={{"fontFamily":"'Roboto', sans-serif"}}>
	                  <CardHeader  style={{"fontWeight":"bold"}}
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

	                <Card style={{"fontFamily":"'Roboto', sans-serif"}}>
	                  <CardHeader  style={{"fontWeight":"bold"}}
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

	            <TransitionGroup className = "places">

	              {this.places()}
	              

	            </TransitionGroup>

	            <div>

	            	<Board></Board>
	            	

	            </div>

	            

	          </div>



	        </div>
		)
	}

}