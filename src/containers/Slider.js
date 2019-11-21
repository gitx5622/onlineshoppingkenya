import React, { Component } from 'react'
import '../css/Slider.css';
import living from '../images/living.jpg';
import living1 from '../images/living1.jpg';
import fashion1 from '../images/fashion1.jpg';


class Slider extends Component {
    render() {
        return (
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="10000">
                <img src={living} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item" data-interval="2000">
                <img src={living1} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src={fashion1} className="d-block w-100" alt="..."></img>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        )
    }
}

export default Slider
