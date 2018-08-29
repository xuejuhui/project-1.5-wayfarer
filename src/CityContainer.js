import React, { Component } from 'react';
import City from './City.js'

class CityContainer extends Component {



  render() {
    return (
      <div>


            <div className="col-xs-4" id="cityContainer">
                <h1>City</h1>
                <City cityName="New York" cityUrl='./images/new-york-city.jpg' handleCitySwitch={this.props.handleCitySwitch}/>
                <City cityName="London" cityUrl='./images/london.jpg' handleCitySwitch={this.props.handleCitySwitch}/>
                <City cityName="Taipei" cityUrl='./images/Taipei.jpg' handleCitySwitch={this.props.handleCitySwitch}/>
                <City cityName="Fujian" cityUrl='./images/fujian.jpg' handleCitySwitch={this.props.handleCitySwitch}/>
                <City cityName="Vancouver" cityUrl='./images/vancouver.jpg' handleCitySwitch={this.props.handleCitySwitch}/>
                <City cityName="Istanbul" cityUrl='./images/istanbul.jpg' handleCitySwitch={this.props.handleCitySwitch}/>
            </div>
      </div>
    );
  }
}

export default CityContainer;