import React, { Component } from 'react';
import ProfilePost from './ProfilePost.js'

class ProfilePosts extends Component {
  render() {
  	console.log("inside ProfilePosts: ", this.props.post[0])
  	let renderPost = this.props.post.map(p =>{
  		return <ProfilePost 
      title={p.title} 
      description={p.description} 
      postId={p._id} 
      handlePostDelete = {this.props.handlePostDelete}
      />
  	})

    return (
      <div>
      <div id="profile-post-panel">
      
          <h3 className="post" style={{textAlign:'center'}}>Posts</h3>
      {renderPost}
      </div>
      </div>
    );
  }
}

export default ProfilePosts;