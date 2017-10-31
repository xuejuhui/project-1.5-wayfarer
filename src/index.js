// Developer TODO: Load in App component and render to the DOM
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js'
// import {Router, browserHistory} from 'react-router'
// import routes from './config/routes.js'
// import './index.css'

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);