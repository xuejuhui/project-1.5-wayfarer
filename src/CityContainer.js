import React, { Component } from 'react';
import City from './City.js'

class CityContainer extends Component {
  render() {
    return (
      <div>


            <div className="col-xs-4" id="cityContainer">
                <h1>City</h1>
                <City />
                <City />
                <City />
                <City />
            </div>
      </div>
    );
  }
}

export default CityContainer;