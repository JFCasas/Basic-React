import React from 'react'

import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';

export default class PlaceCard extends React.Component {

	render(){

		return (

	 		<Card style={{"fontFamily":"'Roboto', sans-serif"}} key={this.props.index}>
	          
	          <CardMedia >

	            <img className = "imagen"  src={process.env.PUBLIC_URL + this.props.place.imageUrl}  />
	          
	          </CardMedia>

	          <CardTitle title={this.props.place.title}></CardTitle>

	          <CardText >{this.props.place.description}</CardText>
	        
	        </Card>
     	)
	}

}