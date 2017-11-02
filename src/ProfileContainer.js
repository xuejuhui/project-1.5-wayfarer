import React, { Component } from 'react';
import ProfilePosts from './ProfilePosts.js'
import style from './profile.css'

class ProfileContainer extends Component {
  render() {
    return (
      <div>
      <div className="profile-body">
<div className="profile-container">
  <div className="profile-main">
    <div className="row">
      <div className="left col-lg-4">
        <div className="photo-left">
          <img className="photo" src="levi.jpg" alt="Levi's picture"/>
          <div className="active"></div>
        </div>
        <div className="info">
          <h4 className="info-name">Levi Perry</h4>
          <p className="info-join">Join date: <span>10-01-2007</span></p>
          <p className="info-title">Web Developer</p>
          <p className="info-city">San Francisco</p>
       </div>
        <p className="desc">Hey, I'm Levi. I am currently attending General Assembly WDI 41!</p>
        <div className="social">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
          <i className="fa fa-pinterest-square" aria-hidden="true"></i>
          <i className="fa fa-tumblr-square" aria-hidden="true"></i>
        </div>
      </div>
      <div className="right col-lg-8">
      <ProfilePosts />
      </div>
</div>
</div>
  </div>
</div>
      </div>
    );
  }
}

export default ProfileContainer;