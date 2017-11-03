import React, { Component } from 'react';
import City from './City.js'

class CityContainer extends Component {
  render() {
    return (
      <div>


            <div className="col-xs-4" id="cityContainer">
                <h1>City</h1>
                <City cityName="New York" cityUrl='./images/new-york-city.jpg'/>
                <City cityName="London" cityUrl='./images/london.jpg'/>
                <City cityName="Taipei" cityUrl='./images/Taipei.jpg'/>
                <City cityName="Fujian" cityUrl='./images/fujian.jpg'/>
                <City cityName="Vancouver" cityUrl='./images/vancouver.jpg'/>
                <City cityName="Istanbul" cityUrl='./images/istanbul.jpg'/>
            </div>
      </div>
    );
  }
}

export default CityContainer;