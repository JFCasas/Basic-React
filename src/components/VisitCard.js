import React from 'react'

import {Card,  CardText } from 'material-ui/Card';

export default class VisitCard extends React.Component{

	render(){

		return(

			<Card style={{"fontFamily":"'Roboto', sans-serif", "marginTop": ".5em"}} 
				key={this.props.index} >

		        <CardText >{this.props.visit.observation}</CardText>
		              
		        
		      
		    </Card>

		)
	}
}