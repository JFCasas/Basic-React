import React from 'react';

import {

  BrowserRouter as ReactRouter,
  Route,
  Switch

} from 'react-router-dom';

import App from './App' 

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Prueba from './pages/Prueba'
import Dashboard from './pages/Dashboard'
import New from './pages/New'

const userLoggedIn = false;

export default class Router extends React.Component {

	authorizedRoutes(){

		if(userLoggedIn){

			return(

				<div>

					<Route exact path="/prueba" component={Prueba}></Route>
					<Route exact path="/new" component={New}></Route>
					

				</div>

				
			)
		}

	}

	home(){

		if (userLoggedIn) return Dashboard
		return Home
	}

	render(){

		return (

			<ReactRouter>

				<App>

				  <Switch>
				  	<Route exact path="/" component={this.home()}></Route>
		            <Route path="/login" component={Login}></Route>
		            <Route path="/signup" component={Login}></Route>
		            {this.authorizedRoutes()}

				  </Switch>

					

			    </App>
				
			</ReactRouter>

		)
	}

}