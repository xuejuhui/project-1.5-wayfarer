// Developer TODO: Define App component defintion here
import React, { Component } from 'react';
import NavBar from './NavBar.js'
// import './Home.css';
// import SearchContainer from './SearchContainer.js'

class LayoutContainer extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default LayoutContainer;