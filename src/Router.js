import React from 'react';

import {

  BrowserRouter as ReactRouter,
  Route

} from 'react-router-dom';

import App from './App' 

import Home from './pages/Home'
import Login from './pages/Login'
import Prueba from './pages/Prueba'

export default class Router extends React.Component {

	render(){

		return (

			<ReactRouter>

				<App>

					<Route exact path="/" component={Home}></Route>
		            <Route path="/login" component={Login}></Route>
		            <Route path="/prueba" component={Prueba}></Route>

			    </App>
				
			</ReactRouter>

		)
	}

}