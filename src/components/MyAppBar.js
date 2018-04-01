import React from 'react';

import AppBar from 'material-ui/AppBar';

import LogoutButton from './LogoutButton'

import LoginButton from './LoginButton'



export default class MyAppBar extends React.Component {

	

	setTitle(){

		if (this.props.user.jwt){

			return "Bienvenido " + this.getName()
		
		}else{

			return "PLACES"
		}
	}

	getName(){

		if (this.props.user.email) {

			return this.props.user.email.split('@')[0]

		}else{

			return ""
		}

	}


	render(){

		return (

			<AppBar
			    
			    title= {this.setTitle()}

			    style ={{"backgroundColor" : "#000" }}

			    showMenuIconButton = {false}

			    titleStyle ={{"color" : "#F5F5F5", "cursor":"pointer", "textTransform": "capitalize"}}

			    onTitleClick={this.props.goHome}

			    iconElementRight={this.props.user.jwt ? <LogoutButton logout = {this.props.logout} /> : <LoginButton/>}
			    
			/>

		)
	}

}