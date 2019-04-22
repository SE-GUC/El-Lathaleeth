import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import img1 from "../components/Assets/pyrrr.jpg"
import img2 from "../components/Assets/Nileread.jpg"
import img3 from "../components/Assets/nile2read.jpg"
import img4 from "../components/Assets/NewCap.jpg"
import img from "../components/Assets/bg.jpeg.jpg"

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
          <img src= {img}  />
        </a>
        <a className="carousel-item" href="#">
          {" "}
          <img src= {img1}  />
        </a>
        <a className="carousel-item" href="#">
          {" "}
          <img src={img2} />
        </a>
        <a className="carousel-item" href="#">
          {" "}
          <img src={img3}/>
        </a>
        <a className="carousel-item" href="#">
          {" "}
          <img src={img4}/>
        </a>
      </div>
    );
  }
}
export default Carousel;
