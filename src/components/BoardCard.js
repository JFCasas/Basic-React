import React from 'react'

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

			 <Card style={{"fontFamily":"'Roboto', sans-serif"}} key={this.props.index}>

        <CardText >{this.props.card.content}</CardText>
              
        <CardActions style={{"textAlign": "right"}}>
            
           <FlatButton label="Ocultar" secondary={true}  /> 
        
        </CardActions>
      
       </Card>
	         
     	)
	}

}