import React from 'react'

import Modal from 'react-modal';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import {orange500,grey900 } from 'material-ui/styles/colors';

import { createVisit } from '../requests/visits'

import * as actions from '../actions/visitsActions'



import { push } from 'react-router-redux'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height				  : '60vh',
    width				  : '60vw',
    padding				  : '5em',

  }
}

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



export default class VisitModal extends React.Component {

	constructor(props){

		super(props)

		this.createVisit = this.createVisit.bind(this)
		
	}

	createVisit(){

		const data = {

			_place : this.props.place._id,
			observation : this.refs.observationField.getValue(),

		}

		//console.log(this.props.place)
		//console.log(this.props.jwt)

		/*createVisit(data,this.props.jwt).then((response)=>{

			console.log(response)
		
		}).catch((error)=>{

			console.log(error)
		})*/

		this.props.dispatch(actions.addVisit(data))

		this.props.dispatch(push('/'))

	}

	render() {

		return (

			<div >
        		
		        <Modal
		          
		          isOpen= {this.props.isOpen}
		          style={customStyles}
		          
		          
		        >
		          <h2>{this.props.place.title}</h2>
		          
		          <div className = "modalVisit">

		          	<div style = {{"width" : "20%"}}>
		          		
		          		<h3>Emojis</h3>
		          	
		          	</div>

		          	<div style = {{"width" : "70%"}} className = "modalForm" >


		          		<TextField 
      						hintText="Opina sobre este lugar"
      						style = {{"width" : "40vw"}}
      						underlineStyle={styles.underlineStyle}
      						underlineFocusStyle={styles.underlineStyle}
      						floatingLabelStyle={styles.floatingLabelStyle}
                			ref = 'observationField'
                			multiLine = {true}


    					/>

    					<div className = "modalButtons" >
    						
    						<RaisedButton label="Guardar"
    										onClick = {this.createVisit}
    						  />
		          			

		          			<FlatButton label="Close" secondary={true} onClick={this.props.closeModal}
		          						style = {{"marginLeft" : "1em"}}
		          			/>

    					</div>

		          	</div>

				  </div>
		          
		        </Modal>
		    
		    </div>

		)
	}
}