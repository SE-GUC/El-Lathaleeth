 import React, { Component } from "react";


const axios = require("axios");

class contactUs extends Component {
    render(){
        return(
            <div class="row">
      <h1>Contact Us</h1>
      <div class="col s4">
        <br>Email: elLathaleeth@gmail.com</br> 
        <br>Landline: +203356479</br>
        <br>Mobile: 01004567987</br>
      </div>
      <div class="col s4">
        <h3>Visit Us</h3>
        El Lathaleeth HQ address
      </div>
    </div>
        );
    }
}
export default contactUs;
