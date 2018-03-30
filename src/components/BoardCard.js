import React from 'react'

import CSSTransition from 'react-transition-group/CSSTransition'

import {Card, CardActions, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class BoardCard extends React.Component {

	constructor(props){

    	super(props)

    	this.state = {

      		numero: 0
      }



  }

	render(){

		return (

      <CSSTransition timeout = {300}  classNames = 'fade-scale' in = {this.props.in}  >

			 <Card style={{"fontFamily":"'Roboto', sans-serif"}} key={this.props.index} >

        <CardText >{this.props.card.content}</CardText>
              
        <CardActions style={{"textAlign": "right"}}>
            
            
           <FlatButton label="Ocultar" secondary={true} onClick={()=> this.props.onRemove(this.props.card)}   /> 
        
        </CardActions>
      
       </Card>

      </CSSTransition>
	         
     	)
	}

}