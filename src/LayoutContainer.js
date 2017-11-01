// Developer TODO: Define App component defintion here
import React, { Component } from 'react';
import NavBar from './NavBar.js'
import HomeContent from './HomeContent.js'
import axios from 'axios'
import {browserHistory} from 'react-router';
// import './Home.css';
// import SearchContainer from './SearchContainer.js'

class LayoutContainer extends Component {
	constructor(props) {
    super(props);
    this.state = {
      username: '', password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitLog = this.handleSubmitLog.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    console.log(this.state.username);
     axios.post(`http://localhost:3001/signup`, {username:username, password:password})
    .then(res => {
      console.log('res is ', res);
      browserHistory.push('/login');
    }, err => {
      console.log(err);
    });
  }
    handleSubmitLog(e){
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
  axios.post(`http://localhost:3001/login`, {username:username, password:password})
    .then(res => {
      console.log('res is ', res);
      this.setState({isAuthenticated: true, id:res._id});
      browserHistory.push('/');
    }, err => {
      console.log('oops!');
      console.log(err);
    });
  }
  // handleLogout(){
  //     this.setState({isAuthenticated: false, id:''});
  // }
    handleUsernameChange(e){
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }
  render() {
    return (
      <div>
        <NavBar 
           handleSubmit = {this.handleSubmit.bind(this)}
           handleSubmitLog = {this.handleSubmitLog.bind(this)}
    	   handlePasswordChange = {this.handlePasswordChange.bind(this)}
    	   handleUsernameChange = {this.handleUsernameChange.bind(this)}
        />
        <HomeContent />
      </div>
    );
  }
}

export default LayoutContainer;