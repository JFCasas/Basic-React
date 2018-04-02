import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {orange500,grey900 } from 'material-ui/styles/colors';

import {

  Link,
  Route

} from 'react-router-dom';

import { login, signUp } from '../requests/auth'

import { connect } from 'react-redux'

import * as actions from '../actions/userActions'

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


class Signup extends React.Component {

	constructor(props){

    super(props)

    this.createAccount = this.createAccount.bind(this)

  }

  createAccount(){

    const credentials = {

      email : this.refs.emailField.getValue(),
      password : this.refs.passwordField.getValue(),
      name: this.refs.nameField.getValue()
    
    }


    signUp(credentials).then((response)=>{

      this.props.dispatch(actions.login(response.jwt))

      this.props.dispatch(actions.loadUser(response.user))

      this.props.dispatch(push('/'))
    
    }).catch((error)=>{

      console.log(error)
    })

  }


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
                ref = 'emailField'
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
                ref = "passwordField"
    			/>
					

				</div>

        <div >

          <TextField 
              
                floatingLabelText="Nombre Usuario"
                
                style = {{"width" : "30vw", "marginTop" : "5em"}}
                underlineStyle={styles.underlineStyle}
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                ref = "nameField"
          />
          

        </div>

				<div >

          <RaisedButton label="Registrarse" secondary={true} 
            style = {{"width" : "10vw", "marginTop" : "5em"}}
            onClick={this.createAccount}
          />

          <Link to="/login" style={{"textDecoration": "none", "marginLeft" : "2em", "color" : grey900}}>Ya tengo cuenta</Link>
          

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

export default connect(mapStateToProps)(Signup)