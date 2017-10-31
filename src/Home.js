// Developer TODO: Define App component defintion here
import React, { Component } from 'react';
// import './Home.css';
// import SearchContainer from './SearchContainer.js'

class Home extends Component {
  render() {
    return (
      <div className="Home">
            <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Wayfarer</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="/">Home</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Logout</a></li>
              <li className="active"><a href="#" data-toggle="modal" data-target="#squarespaceModal">Login / Signup</a></li>
            </ul>
          </div>
        </div>
      </nav>
        <h1>React Giphy</h1>
        <hr />
      </div>
    );
  }
}

export default Home;