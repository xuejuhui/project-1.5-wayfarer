import React, { Component } from 'react';
import Post from './Post.js'
import PostCityImage from './PostCityImage.js'
import PostModal from './PostModal.js'

class PostContainer extends Component {

	constructor(props) {
    super(props);
    this.state = {
      
    };
  }

                    // <button className="w3-button w3-large w3-circle w3-xlarge w3-ripple w3-orange" style={{'zIndex': 0}} id="addPostBtn" >+</button>

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
                        <PostCityImage />
                    </div>
                </div>
                <div className="row" style={{'marginTop': 15 + 'px'}}>
                    <div className="col-xs-1 col-xs-offset-10">
                        <PostModal />
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