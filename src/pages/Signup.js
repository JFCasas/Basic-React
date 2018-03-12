import React from 'react';

import {Link} from 'react-router-dom';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {orange500,grey900 } from 'material-ui/styles/colors';

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



export default class Signup extends React.Component {

	render(){

		return (

			<div className = "formulario" style ={{'backgroundImage' : "url("+process.env.PUBLIC_URL + '/images/fondologin.jpeg'+")"}} >

				<div >

					<TextField 
      				
      					floatingLabelText="Email"
      					type="email"
      					style = {{"width" : "30vw"}}
      					underlineStyle={styles.underlineStyle}
      					underlineFocusStyle={styles.underlineStyle}
      					floatingLabelStyle={styles.floatingLabelStyle}
    				/>
					

				</div>

				<div >

					<TextField 
      				
      					floatingLabelText="Password"
      					type="password"
      					style = {{"width" : "30vw", "marginTop" : "5em"}}
      					underlineStyle={styles.underlineStyle}
      					underlineFocusStyle={styles.underlineStyle}
      					floatingLabelStyle={styles.floatingLabelStyle}
    				/>
					

				</div>

				<div >

					<RaisedButton label="Registrarse" secondary={true} 
						style = {{"width" : "10vw", "marginTop" : "5em"}}
					/>

          <Link to="/login" style={{"textDecoration": "none", "marginLeft" : "2em", "color" : grey900}}>Ya tengo cuenta</Link>
					

				</div>

				

			</div>

			

		)
	}

}