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
      <h4>Title: {this.props.title}</h4>
      <p>{this.props.description}123123</p>
      <i className="fa fa-trash-o fa-lg delete" onClick={(e) => this.props.handlePostDelete(this.props.postId, e)}></i>
</div>
      </div>
    );
  }
}

export default ProfilePost;