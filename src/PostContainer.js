import React, { Component } from 'react';
import Post from './Post.js'
import PostCityImage from './PostCityImage.js'
import PostModal from './PostModal.js'
import axios from 'axios'

class PostContainer extends Component {

  render() {
    let filterPost = this.props.post.filter(p =>{
        return p.city===this.props.cityClicked;
    })

    let renderPost = filterPost.map(p =>{
        return <Post 
                title={p.title} 
                description={p.description} 
                handlePostDelete = {this.props.handlePostDelete}
                id={this.props.id}
                postId = {p._id}
                />
    })
    return (
      <div>

        <div className="col-xs-7 col-xs-offset-1" id="postContainer">
                <div className="row" style={{'marginTop': 15 + 'px'}}>
                    <div className="col-xs-6">
                        <h1>{this.props.cityClicked}</h1>
                        <p>All posts about {this.props.cityClicked}</p>
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
        handleCitySelectorChange = {this.props.handleCitySelectorChange}
                        />
                    </div>
                </div>
                {renderPost}
            </div>
      </div>
    );
  }
}

export default PostContainer;