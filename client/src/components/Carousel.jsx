import React, { Component } from "react";
import img from "./Assets/InvestInEgypt.jpg";
import "bootstrap/dist/css/bootstrap.css";

class Carousel extends Component {
  render() {
    return (
      <div id="slides" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active" />
          <li data-target="#slides" data-slide-to="1" />
          <li data-target="#slides" data-slide-to="2" />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} alt="hi" />
            <div className="carousel-caption">
              <h1 className="display-2">Work in progress</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img} alt="hi" />
          </div>
          <div className="carousel-item">
            <img src={img} alt="hi" />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
