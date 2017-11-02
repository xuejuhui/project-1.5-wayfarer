import React, { Component } from 'react';
import ProfilePost from './ProfilePost.js'

class ProfilePosts extends Component {
  render() {
    return (
      <div>
      <div id="profile-post-panel">
      
          <h3 className="post" style={{textAlign:'center'}}>Posts</h3>
      <ProfilePost />
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