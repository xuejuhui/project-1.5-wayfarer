// Developer TODO: Define App component defintion here
import React, { Component } from 'react';
import LayoutContainer from './LayoutContainer.js'
// import './Home.css';
// import SearchContainer from './SearchContainer.js'

class Home extends Component {
  render() {
    return (
      <div className="Home">
         <LayoutContainer />
      </div>
    );
  }
}

export default Home;
