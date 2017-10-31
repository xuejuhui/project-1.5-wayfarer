import React, { Component } from 'react';
import CityContainer from './CityContainer.js'
import PostContainer from './PostContainer.js'
import style from './loggedIn.css'

class LoggedInContainer extends Component {
  render() {
    return (
      <div>
        Hi! I'm LoggedInContainer!
        <div id="bodyContainer">
        <div className="row">
      <CityContainer />
      <PostContainer />
      	</div>
      	</div>
      </div>
    );
  }
}

export default LoggedInContainer;