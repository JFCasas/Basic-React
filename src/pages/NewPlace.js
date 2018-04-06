import React from 'react';

import { connect } from 'react-redux'

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions} from 'material-ui/Card';

import {orange500,grey900 } from 'material-ui/styles/colors';

import { createPlace } from '../requests/places'

import { push } from 'react-router-redux'


const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: grey900,
  },
  floatingLabelStyle: {
    color: grey900,
  },
  
};

 
class NewPlace extends React.Component {

	constructor(props){

		super(props)

		this.createPlace1 = this.createPlace1.bind(this)
	}

	createPlace1(){

		const data = {

			title : this.refs.titleField.getValue(),
      		decription : this.refs.descriptionField.getValue()
		}

		 
		createPlace(data,this.props.user.jwt).then((response)=>{

			console.log(response)

			this.props.dispatch(push('/'))
		
		}).catch((error)=>{

			console.log(error)
		})



	}

	render(){

		return (
      
			<div className = "Header-background">
          
	          <div  className = "container1" style={{ "width":"70%", "margin" : "0 auto"}} >

	          	<Card style={{ "width":"80%", "height":"60vh"}}>

	          		<div className = "new-place">

	          			<div style = {{"marginTop":"0em"}}>

	          				<TextField 
      				
      						floatingLabelText="Nombre del Negocio"
      						
      						style = {{"width" : "45vw"}}
      						underlineStyle={styles.underlineStyle}
      						underlineFocusStyle={styles.underlineStyle}
      						floatingLabelStyle={styles.floatingLabelStyle}
                			ref = 'titleField'
    						/>
	          				

	          			</div>

	          			

    					<div style = {{"marginTop":"5em"}}>

	          				<TextField 
      				
      						floatingLabelText="Descripcion del Negocio"
      						
      						style = {{"width" : "45vw"}}
      						underlineStyle={styles.underlineStyle}
      						underlineFocusStyle={styles.underlineStyle}
      						floatingLabelStyle={styles.floatingLabelStyle}
							multiLine = {true}
                			ref = 'descriptionField'
    						/>
	          				

	          			</div>

    					         			

	          			<div >

				          <RaisedButton label="Guardar" secondary={true} 
				            style = {{"width" : "10vw", "marginTop" : "5em"}}
				            onClick = {this.createPlace1}
				          />

				          
						</div>
					          			

	          		</div>

	          		
	          		

	          	</Card>

	            
	          </div>
	        
	        </div>
	      
    	)
	}

}

function mapStateToProps(state,ownProps){

	return {

		user: state.user
	}
}

export default connect(mapStateToProps)(NewPlace)