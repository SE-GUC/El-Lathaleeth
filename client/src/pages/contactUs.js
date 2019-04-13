import React, { Component } from "react";

const axios = require("axios");

class contactUs extends Component {
    render(){
        return(
            <div class="row">
      <h1>Contact Us</h1>
      <div class="col s4">
        Email: elLathaleeth@gmail.Com
        Landline: +203356479
        Mobile: 01004567987
      </div>
      <div class="col s4">
        <h3>Visit Us</h3>
        El Lathaleeth HQ address
      </div>
    </div>
        );
    }
}
