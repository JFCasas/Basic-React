import React from 'react'


import {Link} from 'react-router-dom'

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {grey50} from 'material-ui/styles/colors'

import Title from '../components/Title'
import {getPlaces} from '../requests/places'
import PlaceCard from '../components/PlaceCard'


import { connect } from 'react-redux'

class Home extends React.Component {

	constructor(props){

	    super(props)

	    this.state = {

	      places:[]
	    
	    }

	    //console.log(this.props.places)



	    this.loadPlaces()

	    this.hidePlace = this.hidePlace.bind(this)

	}

	loadPlaces(){

		getPlaces().then((jsonR)=>{

		  //const places = jsonR.docs

		  this.setState({

		    places : jsonR.docs
		  
		  })

		})
	}
	
	places(){

	    return this.state.places.map((place,index)=>{

	      return(

	        <PlaceCard place={place} key={index} onRemove={this.hidePlace}></PlaceCard>
	      )

	    })
	}

	hidePlace(place){

		this.setState({

			places : this.state.places.filter(el => el !== place)

		})
	}


	render(){

		return (

			<div className = "Header-background">
          
	          <div  className = "container" style={{ "width":"70%", "margin" : "0 auto"}} >

	            <div className = "titulo">
	              
	              <Title></Title> 

	              <Link to="/signup" >
	              	
	              	<RaisedButton label="Crear Cuenta Gratuita" secondary={true}  />

	              </Link>
	            
	              

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

	            <h2 style={{"textAlign":"center", "marginBottom":"2em" , fontFamily: "'Pacifico', cursive"}}>Negocios populares</h2>

	            <div className = "places">



	              {this.places()}
	              

	            </div>

	            

	            

	          </div>



	        </div>
		)
	}

}

function mapStateToProps(state,ownProps){

	return {

		places: state.places
	}
}

export default connect(mapStateToProps)(Home)