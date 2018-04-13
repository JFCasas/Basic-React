import React from 'react';

import {Link} from 'react-router-dom'

import { withRouter } from 'react-router-dom'

import {getPlace} from '../requests/places'

import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


import VisitModalContainer from '../containers/VisitModalContainer'

import { loadVisitsPlace } from '../requests/visits'

import { connect } from 'react-redux'

import * as actions from '../actions/visitsActions'

class Place extends React.Component {

	constructor(props){

	    super(props)

	    //console.log(props.match.params.slug)

	    const slug = props.match.params.slug

	    //console.log(slug)

	    this.state = {

       		place: {},
       		modalIsOpen: false
      
      	}
      	this.loadPlace(slug)
      	
      	this.openModal = this.openModal.bind(this)
      	this.closeModal = this.closeModal.bind(this)

      	this.loadVisits(slug)

      	this.displayVisits()


     }

	loadPlace(slug){

		getPlace(slug).then((jsonR)=>{

			this.setState({

        		place : jsonR
      
      		})
		})

	}

	openModal() {
    	
    	this.setState({modalIsOpen: true});
  	}

  	closeModal() {
    	
    	this.setState({modalIsOpen: false});
 	 
 	 }

 	 loadVisits(slug){

 	 	/*loadVisitsPlace(slug).then((result)=>{

 	 		console.log(result)
 	 	})*/

 	 	this.props.dispatch(actions.loadVisits(slug))
 	 }

 	 displayVisits(){

 	 	console.log(this.props.visits)
      
 	 }

	render(){

		return (

			<div  className = "container" style={{ "width":"70%", "margin" : "0 auto"}} >

				<VisitModalContainer isOpen = {this.state.modalIsOpen} closeModal = {this.closeModal}
							place = {this.state.place}
				>
					

				</VisitModalContainer>

				 <div>
				 	
				 	{this.displayVisits()}
				 
				 </div>

				<Card >
				    
				    <CardMedia>
				      
				      <img className = "imagen2"  src={"http://127.0.0.1:3001/" + this.state.place.coverImage } alt ="" />
				    
				    </CardMedia>

				    <div className = "container1">

				    	<div>

					    	<CardTitle title= {this.state.place.title}  />
					    
					    	<CardText>
					      		{this.state.place.description}
					    	</CardText>
					    
					    	<CardActions>

					    		<Link to="/" >
					      			<FlatButton label="Volver" secondary={true} />
					      	
					      		</Link>
					      	
					      	</CardActions>

					      	

	              		</div>

					    <div>

					    	<CardText>
					      		Hora de Apertura:  {this.state.place.openHour}
					    	</CardText>
					    	<CardText>
					      		Hora de Cierre:  {this.state.place.closeHour}
					    	</CardText>

					    	<FlatButton label="Agregar Comentario" secondary={true}
					    				onClick={this.openModal} />
					    
					    	
					    </div>
					    	

				    </div>

				 </Card>

				 <div>
				 	
				 	{this.displayVisits()}
				 
				 </div>

			</div>
			      
			
      	)
	
	}

}

function mapStateToProps(state,ownProps){

	return {

		visits: state.visits
	}
}

export default connect(mapStateToProps)(withRouter(Place))



