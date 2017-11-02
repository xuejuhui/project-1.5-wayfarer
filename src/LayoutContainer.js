// Developer TODO: Define App component defintion here
import React, { Component } from 'react';
import NavBar from './NavBar.js'
import HomeContent from './HomeContent.js'
import LoggedInContainer from './LoggedInContainer.js'
import axios from 'axios'
import {browserHistory} from 'react-router';
// import './Home.css';
// import SearchContainer from './SearchContainer.js'

class LayoutContainer extends Component {
  //constructor should always be the first one 
	constructor(props) {
    super(props);
    this.state = {
      username: '', password: '', isAuthenticated:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitLog = this.handleSubmitLog.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }
     cookieLogIn(){
    let userCookie = this.getCookie("Veggie");
    console.log("cookieLogIn: ", userCookie);
    axios.post(`http://localhost:3001/login`, userCookie)
    .then(res => {
      console.log('res is ', res);
      this.setState({isAuthenticated: true, id:res._id, username:res.username});
        console.log("got an cookie!!!log in!!")
    }, err => {
      console.log('oops!');
      console.log(err);
    });
  }

  componentDidMount() {
    this.cookieLogIn();
  }

  setCookie(cname, cvalue, expireDays) {
        var d = new Date();
        d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

  getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              console.log("watch: ", c)

                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

  handleSubmit(e){
    e.preventDefault();

    let username = this.state.username;
    let password = this.state.password;
    console.log(this.state.username);
     axios.post(`http://localhost:3001/signup`, {username:username, password:password})
    .then(res => {
      console.log('res is ', res);
      // browserHistory.push('/');
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
      this.setCookie('Veggie', `username=${username}&password=${password}`,0.03);
    }, err => {
      console.log('oops!');
      console.log(err);
    });
  }
  handleLogout(e){
    e.preventDefault();
      this.setState({isAuthenticated: false, id:''});
       this.setCookie('Veggie','',0.03)
  }
    handleUsernameChange(e){
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }

  buttonOnClick(e){
    this.setState({isAuthenticated: !this.state.isAuthenticated})
  }

  render() {
    let thingsToPrint = "";
    if(!this.state.isAuthenticated){
      if(document.getElementById("log-out-btn"))document.getElementById("log-out-btn").style.display = "none";
      if(document.getElementById("log-in-btn"))document.getElementById("log-in-btn").style.display = "";
      thingsToPrint = <HomeContent />
    }else{
      if(document.getElementById("log-in-btn")) document.getElementById("log-in-btn").style.display = "none";
      if(document.getElementById("log-out-btn"))document.getElementById("log-out-btn").style.display = "";
      thingsToPrint = <LoggedInContainer />
    }

    return (
      <div>

      <button onClick={ e => this.buttonOnClick(e)}>switch</button>
        <NavBar
           handleSubmit = {this.handleSubmit.bind(this)}
           handleSubmitLog = {this.handleSubmitLog.bind(this)}
    	   handlePasswordChange = {this.handlePasswordChange.bind(this)}
    	   handleUsernameChange = {this.handleUsernameChange.bind(this)}
        handleLogout = {this.handleLogout.bind(this)}
        />
      {thingsToPrint}

      </div>
    );
  }
}

export default LayoutContainer;
