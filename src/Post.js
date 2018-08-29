import React, { Component } from 'react';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expand: '',
    };
  }

  onClickExpand(e){
    if(this.state.expand===''){this.setState({expand:'expandPost'});}
    else{this.setState({expand:''})}
  }

  render() {
      if(this.props.currentUser===this.props.postUserId){
    let targetPost = this.props.postId
    return (

      <div onClick={e =>this.onClickExpand(e)}>
        <div className={`postComponent row ${this.state.expand}`}>
      <div className="col-xs-3">
      <img className="cityImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4IcRyT_hLcN4VNMTj7M136R3FBH4tlT86UUQ7CZq5wnl4YgImg" alt="City"/>
      </div>
      <div className="col-xs-9">
      <h4 style={{marginBottom:0}}>Post Title: {this.props.title}</h4>
      <p className="description">{this.props.description}</p>
      <i className="fa fa-trash-o fa-lg delete" onClick={(e) => this.props.handlePostDelete(this.props.postId, e)}></i>

      </div>
      </div>
      </div>
    );
  }else {
      return(
            <div onClick={e =>this.onClickExpand(e)}>
        <div className={`postComponent row ${this.state.expand}`}>
      <div className="col-xs-3">
      <img className="cityImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4IcRyT_hLcN4VNMTj7M136R3FBH4tlT86UUQ7CZq5wnl4YgImg" alt="City"/>
      </div>
      <div className="col-xs-9">
      <h4 style={{marginBottom:0}}>Post Title: {this.props.title}</h4>
      <p className="description">{this.props.description}</p>
  </div>
      </div>
      </div>

      )}
}
}



export default Post;
