import React, { Component } from 'react';

class HomeContent extends Component {
  render() {
    return (
     <div>
    <div className="container">
        <div style={{height: 80 + 'vh', width:100+'%'}} id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators" >
                <li data-target="#myCarousel" data-slide-to="0" className="active" id="slide" ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                <div className="item active">
                    <img style={{height: 80 + 'vh', width:100+'%'}}  className="firstImage" src={require('./images/image88.jpg')} alt="country"  />
                    <div className="carousel-caption">
                        <h3>Pin it!</h3>
                        <p>Let us pick one!</p>
                    </div>
                </div>
                <div className="item">
                    <img style={{height: 80 + 'vh', width:100+'%'}} src={require('./images/syd.jpg')} alt="world" />
                    <div className="carousel-caption">
                        <h3>world</h3>
                        <p>hmmm, where to go next?</p>
                    </div>
                </div>

                <div className="item">
                    <img style={{height: 80 + 'vh', width:100+'%'}} src={require('./images/greatWall.jpg')} alt="Greece" />
                    <div className="carousel-caption">
                        <h3>China</h3>
                        <p>China is an amazing place to go!</p>
                    </div>
                </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
        </div>
    </div>


    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h2>Heading</h2>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
            <div className="col-md-4">
                <h2>Heading</h2>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
            <div className="col-md-4">
                <h2>Heading</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
        </div>
        <hr />
    </div>
</div>
    );
  }
}

export default HomeContent;