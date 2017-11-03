import React, { Component } from 'react';
import ProfilePost from './ProfilePost.js'

class ProfilePosts extends Component {
  render() {
  	console.log("inside ProfilePosts: ", this.props.post[2])
  	let renderPost = this.props.post.map(p =>{
  		return <ProfilePost title={p.title} description={p.description} postUserId={p.user} currentUser={this.props.id}/>
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