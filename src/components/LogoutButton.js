import React from 'react'

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class LogoutButton extends React.Component{

	render(){

		return(
			
			<IconMenu
     			 iconButtonElement={<IconButton iconStyle={{"fill":"white"}}><MoreVertIcon /></IconButton>}
      			 anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      			 targetOrigin={{horizontal: 'left', vertical: 'top'}}
    		>
      			<MenuItem primaryText="LOGOUT" onClick = {this.props.logout}/>
      			
    		</IconMenu>
		)
	}
}