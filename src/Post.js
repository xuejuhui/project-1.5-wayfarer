// Developer TODO: Define App component defintion here
import React, { Component } from 'react';

class Post extends Component {
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
    return (
      <div onClick={e =>this.onClick(e)}>
        <div className={`postComponent row ${this.state.expand}`}>
      <div className="col-xs-3">
      <img className="cityImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejUuLVpp1bpqc4xfzmFKQaQGkKG_LY-PrneVoW_KeF8nK2Ia3" alt="City"/>
      </div>
      <div className="col-xs-9">
      <h4 style={{marginBottom:0}}>Post Title</h4>
      <p>This city is amazing!blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
      </div>
      </div>
      </div>
    );
  }
}

export default Post;
