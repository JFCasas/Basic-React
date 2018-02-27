import React from 'react'

import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class PlaceCard extends React.Component {

	constructor(props){

    	super(props)

    	this.state = {

      		numero: 0
    	}

    	

  	}




	render(){

		return (

	 		<Card style={{"fontFamily":"'Roboto', sans-serif"}} key={this.props.index}>
	          
	          <CardMedia >

	            <img className = "imagen"  src={process.env.PUBLIC_URL + this.props.place.imageUrl}  />
	          
	          </CardMedia>

	          <CardTitle title={this.props.place.title}></CardTitle>

	          <CardText >{this.props.place.description}</CardText>

	          <CardActions style={{"textAlign": "right"}}>
                <FlatButton label="Ver mas....." secondary={true}/>
                <FlatButton label="Ocultar" secondary={true} onClick={()=> this.props.onRemove(this.props.place)}   />
              </CardActions>
	        
	        </Card>
     	)
	}

}