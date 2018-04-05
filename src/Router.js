import React from 'react';

import {

  BrowserRouter as ReactRouter,
  Route,
  Switch

} from 'react-router-dom';

import { connect } from 'react-redux'

import { ConnectedRouter} from 'react-router-redux'

import App from './App' 

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Prueba from './pages/Prueba'
import Dashboard from './pages/Dashboard'
import NewPlace from './pages/NewPlace'
import Place from './pages/Place'



class Router extends React.Component {

	authorizedRoutes(){

		if(this.props.user.jwt){

			return(

				<div>

					<Route exact path="/prueba" component={Prueba}></Route>
					<Route exact path="/new" component={NewPlace}></Route>
					

				</div>

				
			)
		}

	}

	home(){

		if (this.props.user.jwt) return Dashboard
		return Home
	}

	render(){

		return (

			<ConnectedRouter history={this.props.history}>

				<App>

				  <Switch>
				  	<Route exact path="/" component={this.home()}></Route>
				  	<Route path="/lugares/:slug" component={Place}></Route>
		            <Route path="/login" component={Login}></Route>
		            <Route path="/signup" component={Signup}></Route>
		            {this.authorizedRoutes()}

				  </Switch>

					

			    </App>
				
			</ConnectedRouter>

		)
	}

}

function mapStateToProps(state,ownProps){

  return {

    user: state.user
  }
}

export default connect(mapStateToProps)(Router)