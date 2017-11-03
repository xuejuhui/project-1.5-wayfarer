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
    console.log("id pass down", this.props.currentUser)
    console.log("post user id", this.props.postUserId)
    console.log(this.props.post)
    if(this.props.currentUser===this.props.postUserId){
    return (
      <div onClick={e=>this.onClick(e)}>
<div className={`profile-post ${this.state.expand}`}>
      <h4>Title: {this.props.title}</h4>
      <p>{this.props.description}</p>
</div>
      </div>
    );
  }
else {
      return(

        <div className='other'>
      <h4></h4>
      <p></p>
        </div>
      )
    }
  }
}

export default ProfilePost;