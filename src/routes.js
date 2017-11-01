import React from 'react'
import { Route } from 'react-router'
import NavBar from './NavBar'
import Home from './Home'

var routes = (
	<div>
		<Route path ='/' component={Home} />
		<Route path='/signup' component={NavBar} />
		<Route path='/login' component={Home} />
	</div>
)


export default routes;
