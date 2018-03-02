import React from 'react'

import CSSTransition from 'react-transition-group/CSSTransition'

import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import BoardCard from '../components/BoardCard'


export default class PlaceCard extends React.Component {

	constructor(props){

    	super(props)

    	this.state = {

      		cards: []
      	}

      	this.addCard = this.addCard.bind(this)
	}

    addCard(){

    	const id = this.state.cards.lenght + 1;
    	const content = `Card ${id}` 

    	const newCard = {

    		id : id,
    		content : content
    	}

    	this.setState({
      		cards: this.state.cards.concat(newCard)
    	})
	}

	cards(){

	    return this.state.cards.map((card,index)=>{

	      return(

	        <BoardCard card={card} index={index} ></BoardCard>
	      )

	    })
	}

	render(){

		return (

			<div className = "Board">

				<div className = "botones">

					<RaisedButton label="Add" primary={true} onClick={this.addCard}  />
					<RaisedButton label="Remove" primary={true} onClick={this.updateNumero}  />
				
				</div>

				<ul className="board">
      			
      				{this.cards()}
    		 
    		 	</ul>
				

			</div>
		)
	}

}