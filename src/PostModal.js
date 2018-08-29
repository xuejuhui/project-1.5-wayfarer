import React, { Component } from 'react';
import axios from 'axios'

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
                    <form onSubmit={this.props.handleSubmitPost}>
					 <div class="form-group">
					 <select onChange={this.props.handleCitySelectorChange} id="inputCitySelector">
                      <option value="none">--select--</option>  
					  <option value="London">London</option>
					  <option value="New York">New York</option>
					  <option value="Vancouver">Vancouver</option>
					  <option value="Taipei">Taipei</option>
					  <option value="Fujian">Fujian</option>
					</select>
					 </div>
					 <div class="form-group">
					   <label for="title">Title</label>
					   <input onChange={this.props.handleTitleChange} type="title" class="form-control" id="inputTitle" placeholder="" />
					 </div>
					 <div class="form-group">
					   <textarea onChange={this.props.handleDescriptionChange} class="form-control" rows="3" id="inputDescription"></textarea>
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
