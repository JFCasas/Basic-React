import React from 'react'

import CSSTransition from 'react-transition-group/CSSTransition'

import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class PlaceCardDashboard extends React.Component {

	constructor(props){

    	super(props)

    	this.state = {

      		numero: 0
      	}



    }

	render(){

		return (

			

	 		<Card 
	 			style={{"fontFamily":"'Roboto', sans-serif", "marginTop":"1em"}}
	 			key={this.props.index} 
	 		>

	 		  	<div

	 		  		style={{"fontFamily":"'Roboto', sans-serif", "marginTop":"1em", "display":"flex","justify-content":"space-around"}}

	 		  	>
	 		  		
	 		  		<div style={{"width":"20em"}} >

			 		  	<CardMedia >

			            	<img className = "imagen"  src={process.env.PUBLIC_URL + this.props.place.imageUrl}  />

			          
			          	</CardMedia>
			 		  	

			 		 </div>

			 		 <div>

			 		  	<CardTitle title={this.props.place.title}></CardTitle>

			          	<CardText >{this.props.place.description}</CardText>
			          	<CardText >{this.props.place.address}</CardText>

			          	<CardActions style={{"textAlign": "left"}}>
		                	
		                	<FlatButton label="Ver mas....." secondary={true}/>
		                	
		              	</CardActions>
			 		  	

			 		 </div>
	 		  	
	 		  	</div>

	 		  	
		 	</Card>
		    
	         
     	)
	}

}