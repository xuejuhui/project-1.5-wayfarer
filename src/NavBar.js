// Developer TODO: Define App component defintion here
import React, { Component } from 'react';


// import './Home.css';
// import SearchContainer from './SearchContainer.js'

class NavBar extends Component {
  render() {
    return (
<div className="Home">
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
                <a className="navbar-brand" href="/" onClick={this.props.handleHomeBtnOnClick}>Wayfarer</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="/" onClick={this.props.handleHomeBtnOnClick}>Home</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#" onClick={this.props.handleLogout} id="log-out-btn" style={{display:'none'}}>Logout</a></li>
                    <li className="active"><a href="#" data-toggle="modal" data-target="#squarespaceModal" id="log-in-btn">Login / Signup</a></li>
                    <li className="active"><a href="#" id="profile-btn" style={{display:'none'}} onClick={this.props.handleProfileBtnOnClick}>Profile</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div className="modal fade" id="squarespaceModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                </div>
                <div className="modal-body">
                    <div className="modal-header">
                        <h3 className="modal-title" id="lineModalLabel">Log in</h3>
                    </div>
                     <form onSubmit={ this.props.handleSubmitLog }>
                        <div className="form-group">
                            <label for="inputEmail1">User Name</label>
                           <input onChange={this.props.handleUsernameChange} type="text" className="form-control modalEmpty" placeholder="Enter username" />
                        </div>
                        <div className="form-group">
                            <label for="inputPassword1">Password</label>
                            <input onChange={this.props.handlePasswordChange} type="password" className="form-control modalEmpty" id="inputPassword2" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-default" data-toggle='modal' data-target='#squarespaceModal'>Submit</button>
                    </form>
                    <br />
                    <div className="modal-header">
                        <h3 className="modal-title" id="lineModalLabel2">Sign up</h3>
                    </div>

                    <form onSubmit={this.props.handleSubmit }>
                        <div className="form-group">
                            <label for="inputEmail2">User Name</label>
                            <input onChange={this.props.handleUsernameChange} type="text" className="form-control modalEmpty" placeholder="Enter username" />
                        </div>
                        <div className="form-group">
                            <label for="inputPassword2">Password</label>
                            <input onChange={this.props.handlePasswordChange} type="password" className="form-control modalEmpty" id="inputPassword3" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label for="confirmPassword">Confirm</label>
                            <input onChange={this.props.handlePasswordConfirm} type="password" className="form-control modalEmpty" id="confirmPassword" placeholder="Confirm Password" />
                        </div>
                        <button type="submit" className="btn btn-default" data-toggle='modal' data-target='#squarespaceModal'>Submit</button>
                    </form>

                    <div className="modal-footer">
                        <div className="btn-group btn-group-justified" role="group" aria-label="group button">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-default" data-dismiss="modal" role="button">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
}

export default NavBar;