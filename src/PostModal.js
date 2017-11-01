// Developer TODO: Define App component defintion here
import React, { Component } from 'react';


// import './Home.css';
// import SearchContainer from './SearchContainer.js'

class PostModal extends Component {
  render() {
    return (
<div className="Home">

    <button data-toggle="modal" data-target="#postModal" className="w3-button w3-large w3-circle w3-xlarge w3-ripple w3-orange" style={{'zIndex': 0}} id="addPostBtn" >+</button>

    <div className="modal fade" id="postModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                </div>
                <div className="modal-body">
                	<h1>Create a new post</h1>
                    <form>
					 <div class="form-group">
					 <select>
					  <option value="london">London</option>
					  <option value="new York">New York</option>
					  <option value="vancouver">Vancouver</option>
					  <option value="taipei">Taipei</option>
					  <option value="fujien">TFujien</option>
					</select>
					 </div>
					 <div class="form-group">
					   <label for="title">Title</label>
					   <input type="title" class="form-control" id="inputTitle" placeholder="" />
					 </div>
					 <div class="form-group">
					   <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
					 </div>
					 <div class="form-group">
					 <button type="submit" class="btn btn-default" data-toggle="modal" data-target="#postModal">Submit</button>
					 </div>
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

export default PostModal;