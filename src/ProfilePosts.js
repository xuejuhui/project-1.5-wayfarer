import React, { Component } from 'react';
import ProfilePost from './ProfilePost.js'

class ProfilePosts extends Component {
  render() {
    console.log("inside profilepost", this.props.post)
    return (
      <div>
      <div id="profile-post-panel">
      
          <h3 className="post" style={{textAlign:'center'}}>Posts</h3>
      <ProfilePost post={this.props.post}/>
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      </div>
      </div>
    );
  }
}

export default ProfilePosts;