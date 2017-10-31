import React, { Component } from 'react';
import Post from './Post.js'

class PostContainer extends Component {
  render() {
    return (
      <div>

        <div className="col-xs-7 col-xs-offset-1" id="postContainer">
                <div className="row" style={{'marginTop': 15 + 'px'}}>
                    <div className="col-xs-6">
                        <h1>London</h1>
                        <p>United Kingdom</p>
                    </div>
                    <div className="col-xs-6">
                        <img src="images/pic02.jpg" className="cityImage" />
                    </div>
                </div>
                <div className="row" style={{'marginTop': 15 + 'px'}}>
                    <div className="col-xs-1 col-xs-offset-10">
                    <a className="w3-button w3-large w3-circle w3-xlarge w3-ripple w3-orange" style={{'zIndex': 0}} id="addPostBtn">+</a>
                    </div>
                </div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
      </div>
    );
  }
}

export default PostContainer;