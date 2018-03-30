import React from 'react'


import TransitionGroup from 'react-transition-group/TransitionGroup'



import RaisedButton from 'material-ui/RaisedButton';

import BoardCard from '../components/BoardCard'


export default class Board extends React.Component {

	constructor(props){

    	super(props)

    	this.state = {

      		cards: []
      	}

      	this.addCard = this.addCard.bind(this)

      	this.hideCard = this.hideCard.bind(this)

      	
	}

    addCard(){

    	const id = this.state.cards.length + 1;

    	const content = `Card ${id}` 

    	const newCard = {

    		id : id,
    		content : content
    	}

    	this.setState({
      		
      		cards: this.state.cards.concat(newCard)
    	
    	})
	
	}

	hideCard(card){

		

		this.setState({

			//cards : this.state.cards.filter( el => el != card )

			cards : this.state.cards.filter(function(el){

				return el !== card;
			})
		})
	}

	

	cards(){

	    return this.state.cards.map((card,index)=>{

	      return(

	        <BoardCard card={card} index={index} onRemove={this.hideCard} ></BoardCard>
	        
	      )

	    })
	}

	render(){

		return (

			<div className = "Board">

				<div className = "botones">

					<RaisedButton label="Add" primary={true} onClick={this.addCard}  />
					
				
				</div>

				<TransitionGroup className="board">
      			
      				{this.cards()}
    		 
    		 	</TransitionGroup>
				

			</div>
		)
	}

}