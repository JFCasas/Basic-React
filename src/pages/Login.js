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



class Login extends React.Component {

  constructor(props){

    super(props)

    this.requestAuth = this.requestAuth.bind(this)

    this.createAccount = this.createAccount.bind(this)

    

  }

	requestAuth(){

    const credentials = {

      email : this.refs.emailField.getValue(),
      password : this.refs.passwordField.getValue()
    
    }

    login(credentials).then((response)=>{

      //console.log(response)

      this.props.dispatch(actions.login(response.jwt))

      this.props.dispatch(actions.loadUser(response.user))

      this.props.dispatch(push('/'))
    
    }).catch((error)=>{

      console.log(error)
    })

  }

  createAccount(){

    const credentials = {

      email : this.refs.emailField.getValue(),
      password : this.refs.passwordField.getValue()
    
    }


    signUp(credentials).then((response)=>{

      console.log(response)

      this.props.dispatch(actions.login(response.jwt))
    
    }).catch((error)=>{

      console.log(error)
    })

  }


  render(){

		return (

			<div className = "formulario" style ={{'backgroundImage' : "url("+process.env.PUBLIC_URL + '/images/fondologin.jpeg'+")"}} >

				<div style = {{"width": "30vw"}}>{this.props.user.jwt}</div>

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

			   <div>

          <Route path="/login" exact render={()=>{

            return(

              <div >

                <RaisedButton label="Login" secondary={true} 
                  style = {{"width" : "10vw", "marginTop" : "5em"}}
                  onClick={this.requestAuth}
                />

                <Link to="/signup" style={{"textDecoration": "none", "marginLeft" : "2em", "color" : grey900}}>No tengo cuenta</Link>
            
              </div>
            )


          }}>
          
          </Route>

          <Route path="/signup" exact render={()=>{

            return(

              <div >

                <RaisedButton label="Registrarse" secondary={true} 
                  style = {{"width" : "10vw", "marginTop" : "5em"}}
                  onClick={this.createAccount}
                />

                <Link to="/login" style={{"textDecoration": "none", "marginLeft" : "2em", "color" : grey900}}>Ya tengo cuenta</Link>
                

              </div>
            )


          }}>
          
          </Route>

          
        
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

export default connect(mapStateToProps)(Login)

