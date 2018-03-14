import React from 'react';

import AppBar from 'material-ui/AppBar';

export default class MyAppBar extends React.Component {

	render(){

		return (

			<AppBar
			    title="Places"

			    style ={{"backgroundColor" : "#000" }}

			    showMenuIconButton = {false}

			    titleStyle ={{"color" : "#F5F5F5"}}

			    onTitleClick={this.props.goHome}
			    
			/>

		)
	}

}