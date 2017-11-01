import React, { Component } from 'react';

class CityImage extends Component {
  render() {
    return (
      <div>    
        <img src={require('./images/image88.jpg')} className="cityImage" />
      </div>
    );
  }
}

export default CityImage;