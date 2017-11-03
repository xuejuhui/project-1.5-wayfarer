import React, { Component } from 'react';
import CityContainer from './CityContainer.js'
import PostContainer from './PostContainer.js'
import style from './loggedIn.css'

class LoggedInContainer extends Component {
  render() {
    return (
      <div>
        <div id="bodyContainer">
        <div className="row">
      <CityContainer />
      <PostContainer id={this.props.id}
        handleSubmitPost = {this.props.handleSubmitPost}
        handleTitleChange = {this.props.handleTitleChange}
        handleDescriptionChange = {this.props.handleDescriptionChange}
        post = {this.props.post}
      />
      	</div>
      	</div>
      </div>
    );
  }
}

export default LoggedInContainer;