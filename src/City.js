import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <div>
      <div className="cityComponent row">
      <div className="col-xs-5">
      <img className="cityImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejUuLVpp1bpqc4xfzmFKQaQGkKG_LY-PrneVoW_KeF8nK2Ia3" alt="City"/>
      </div>
      <div className="col-xs-7">
      <h3 className="cityName">City Name</h3>
      </div>
      </div>
      </div>
    );
  }
}

export default City;