import React, { Component } from 'react';

class City extends Component {
  render() {

    let img = ''
    switch(this.props.cityName){
      case 'New York':
        img = <img className="cityImg" src={require('./images/new-york-city.jpg')} alt="City"/>
        break;
      case 'London':
        img = <img className="cityImg" src={require('./images/london.jpg')} alt="City"/>
        break;
      case 'Taipei':
        img = <img className="cityImg" src={require('./images/Taipei.jpg')} alt="City"/>
        break;
      case 'Fujian':
        img = <img className="cityImg" src={require('./images/fujian.jpg')} alt="City"/>
        break;
      case 'Vancouver':
        img = <img className="cityImg" src={require('./images/vancouver.jpg')} alt="City"/>
        break;
      case 'Istanbul':
        img = <img className="cityImg" src={require('./images/istanbul.jpg')} alt="City"/>
        break;
    }


    return (
      <div>
      <div className="cityComponent row">
      <div className="col-xs-5">
      {img}
      </div>
      <div className="col-xs-7">
      <h3 className="cityName">{this.props.cityName}</h3>
      </div>
      </div>
      </div>
    );
  }
}

export default City;