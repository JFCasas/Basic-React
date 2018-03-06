import React from 'react';

import {

  BrowserRouter as ReactRouter,
  Route

} from 'react-router-dom';

import App from './App' 

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Prueba from './pages/Prueba'
import Dashboard from './pages/Dashboard'

const userLoggedIn = true;

export default class Router extends React.Component {

	authorizedRoutes(){

		if(userLoggedIn){

			return(

				<Route exact path="/prueba" component={Prueba}></Route>
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

					<Route exact path="/" component={this.home()}></Route>
		            <Route path="/login" component={Login}></Route>
		            <Route path="/signup" component={Login}></Route>
		            {this.authorizedRoutes()}

			    </App>
				
			</ReactRouter>

		)
	}

}