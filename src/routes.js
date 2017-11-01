import React from 'react'
import { Route } from 'react-router'
import NavBar from './NavBar'
import Home from './Home'
import LoggedInContainer from './LoggedInContainer.js'

var routes = (
	<div>
		<Route path ='/' component={Home} />
		<Route path='/login' component={LoggedInContainer} />
	</div>
)


export default routes;
