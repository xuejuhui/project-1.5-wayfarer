import React, { Component } from 'react';

class ProfilePost extends Component {
	constructor(props) {
    super(props);
    this.state = {
      expand: '',
    };
  }

  onClick(e){
    if(this.state.expand===''){this.setState({expand:'expandPost'});}
    else{this.setState({expand:''})}
  }
  render() {
    console.log(this.props.post)
    return (
      <div onClick={e=>this.onClick(e)}>
<div className={`profile-post ${this.state.expand}`}>
      <h4>Title:</h4>
      <p>Hello, my name is Levi Perry. This is a test post for a profile page I am making.This city is amazing!blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
</div>
      </div>
    );
  }
}

export default ProfilePost;