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

import VisitsCollection from '../components/VisitsCollection'

import * as favActions from '../actions/favsActions'


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
      	this.createFav = this.createFav.bind(this)

      	this.loadVisits(slug)

      	


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

 	 /*displayVisits(){

 	 	console.log(this.props.visits)
      
 	 }*/

 	 createFav(){

		const data = {

			_place : this.state.place._id
		}

		/*createFav(data,this.props.user.jwt).then((response)=>{

			console.log(response)
		
		}).catch((error)=>{

			console.log(error)
		})*/

		this.props.dispatch(favActions.addFav(data))

		

	}

	render(){

		return (

			<div  className = "container" style={{ "width":"70%", "margin" : "0 auto"}} >

				<VisitModalContainer isOpen = {this.state.modalIsOpen} closeModal = {this.closeModal}
							place = {this.state.place}
				>
					

				</VisitModalContainer>

				 

				<Card >

					<div className = "container1">

						<div>

							<CardMedia>
				      
				      			<img className = "imagen2"  
				      				src={"http://127.0.0.1:3001/" + this.state.place.coverImage } alt ="" />
				    
				    		</CardMedia>

				    		<FlatButton label="Añadir a Favoritos" primary={true}
				    					style={{  "marginTop" : "2em"}}
				    					onClick={this.createFav}
				    		 />


							

						</div>

						<div className= "visitsDisplay">
							
							<VisitsCollection visits = {this.props.visits}></VisitsCollection>
						
						</div>
						

					</div>
				    
				    

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

				 

			</div>
			      
			
      	)
	
	}

}

function mapStateToProps(state,ownProps){

	return {

		visits: state.visits,
		user: state.user
	}
}

export default connect(mapStateToProps)(withRouter(Place))



