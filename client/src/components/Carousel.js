import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class Carousel extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".carousel");
    var instance = M.Carousel.init(elems, {
        fullWidth:true,
        indicators:true
    });
  }

  render() {
    return (
      <div className="carousel carousel-slider center" >
        <a className="carousel-item" href="#">
          {" "}
          <img src="https://lorempixel.com/800/400/food/1" />
        </a>
        <a className="carousel-item" href="#">
          {" "}
          <img src="https://lorempixel.com/800/400/food/2" />
        </a>
        <a className="carousel-item" href="#">
          {" "}
          <img src="https://lorempixel.com/800/400/food/3" />
        </a>
        <a className="carousel-item" href="#">
          {" "}
          <img src="https://lorempixel.com/800/400/food/4" />
        </a>
      </div>
    );
  }
}
export default Carousel;
