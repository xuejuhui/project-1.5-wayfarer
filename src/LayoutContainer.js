// Developer TODO: Define App component defintion here
import React, { Component } from 'react';
import NavBar from './NavBar.js'
import HomeContent from './HomeContent.js'
import LoggedInContainer from './LoggedInContainer.js'

class LayoutContainer extends Component {
  constructor(){
    super()
    //sets the initial state via the constructor! that's the constructor's job :)
    this.state = {
      pageSwitch: true,
    }
  }

  buttonOnClick(e){
      this.setState({pageSwitch: !this.state.pageSwitch})
  }
  render() {
    let thingsToPrint = "";
    if(this.state.pageSwitch){
      thingsToPrint = <HomeContent />
    }else{
      thingsToPrint = <LoggedInContainer />
    }
    return (
      <div>
        <button onClick={ e => this.buttonOnClick(e)}>img</button>
        <NavBar />
        {thingsToPrint}
      </div>
    );
  }
}

export default LayoutContainer;