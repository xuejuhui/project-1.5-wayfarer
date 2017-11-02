import React, { Component } from 'react';
import Post from './Post.js'
import PostCityImage from './PostCityImage.js'
import PostModal from './PostModal.js'
import axios from 'axios'

class PostContainer extends Component {

	constructor(props) {
    super(props);
    this.state = {post: []};
    console.log("in post", this.state.post)
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
  }
  loadPostsFromServer(){
    axios({
      method: 'GET',
      url: `http://localhost:3001/api/status`
    })
    .then((res) => {
         console.log('res is ', res);
        this.setState({post: res})});
  }
  handlePostDelete(targetPost) {
    console.log('target :', targetPost);
    axios({
      method: 'DELETE',
      url: `http://localhost:3001/api/status/${targetPost}`
    })
    .then((res)=> {
      console.log('deleting post');
    })
  }

  componentDidMount() {
    this.loadPostsFromServer();
    console.log('mounting', this.state.post)
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
                        <PostModal
                          handleSubmitPost = {this.props.handleSubmitPost}  
        handleTitleChange = {this.props.handleTitleChange}
        handleDescriptionChange = {this.props.handleDescriptionChange}
                        />
                    </div>
                </div>
                <Post handlePostDelete = {this.props.handlePostDelete}
                id={this.props.id}
                posts ={this.state.post}
                />
            </div>
      </div>
    );
  }
}

export default PostContainer;