import React from 'react'

import {Link} from 'react-router-dom'

import CSSTransition from 'react-transition-group/CSSTransition'

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

			<CSSTransition timeout = {300}  classNames = 'fade-scale' in = {this.props.in} >

		 		<Card style={{"fontFamily":"'Roboto', sans-serif", "marginTop":"1em"}} 
		 		key={this.props.index} >
		          
		          <div style={{"width":"20em"}} >

			 		  	<CardMedia >

			            	<img className = "imagen"  src={"http://127.0.0.1:3001/" + this.props.place.coverImage }  />

			          
			          	</CardMedia>
			 		  	

			 	  </div>

		          <CardTitle title={this.props.place.title}></CardTitle>

		          <CardText >{this.props.place.description}</CardText>

		          <CardActions style={{"textAlign": "right"}}>
	                
	                <Link to={"/lugares/" + this.props.place.slug}>

			          	<FlatButton label="Ver mas....." secondary={true}/>

			         </Link>
	                
	                <FlatButton label="Ocultar" secondary={true} onClick={()=> this.props.onRemove(this.props.place)}   />
	              
	              </CardActions>
		        
		         </Card>
		    </CSSTransition>
	         
     	)
	}

}