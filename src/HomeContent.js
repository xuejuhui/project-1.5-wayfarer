// Developer TODO: Define App component defintion here
import React, { Component } from 'react';

class HomeContent extends Component {
  render() {
    return (
     <div>
    <div className="container">
        <div style={{height: 65 + 'vh', width:100+'%'}} id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators" >
                <li data-target="#myCarousel" data-slide-to="0" className="active" id="slide" ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                <div className="item active">
                    <img style={{height: 65 + 'vh', width:100+'%'}}  className="firstImage" src={require('./images/image88.jpg')} alt="country"  />
                    <div className="carousel-caption">
                        <h3>Pin it!</h3>
                        <p>Let us pick one!</p>
                    </div>
                </div>
                <div className="item">
                    <img style={{height: 65 + 'vh', width:100+'%'}} src={require('./images/syd.jpg')} alt="world" />
                    <div className="carousel-caption">
                        <h3>world</h3>
                        <p>hmmm, where to go next?</p>
                    </div>
                </div>

                <div className="item">
                    <img style={{height: 65 + 'vh', width:100+'%'}} src={require('./images/greatWall.jpg')} alt="Greece" />
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
                <h2>Post Tips</h2>
                <p>Wayfarer is a place for you to post tips about your traveling experiences so others can come and learn/plan accordingly when they are planning their trip!</p>

            </div>
            <div className="col-md-4">
                <h2>Community Based</h2>
                <p>Wayfarer doesnt work without you. The larger the user base the better experience everyone has. This is where traveling tips meets the group collective.</p>

            </div>
            <div className="col-md-4">
                <h2>User Friendly</h2>
                <p>We want all of our users to have a great experience on wayfarer. Whether it is planning your next tri[, or just interested in seeing what other people have to say about a place, we want it to be done with ease.</p>

            </div>
        </div>
        <hr />
    </div>
</div>
    );
  }
}

export default HomeContent;
