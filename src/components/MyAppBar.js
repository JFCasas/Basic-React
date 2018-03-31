import React from 'react';

import AppBar from 'material-ui/AppBar';

export default class MyAppBar extends React.Component {

	

	setTitle(){

		if (this.props.user.jwt){

			return "Bienvenido " + this.getName()
		
		}else{

			return "PLACES"
		}
	}

	getName(){

		return this.props.user.email.split('@')[0]
	}


	render(){

		return (

			<AppBar
			    
			    title= {this.setTitle()}

			    style ={{"backgroundColor" : "#000" }}

			    showMenuIconButton = {false}

			    titleStyle ={{"color" : "#F5F5F5", "cursor":"pointer", "textTransform": "capitalize"}}

			    onTitleClick={this.props.goHome}
			    
			/>

		)
	}

}