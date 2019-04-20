 import React, { Component } from "react";


const axios = require("axios");

class contactUs extends Component {
    render(){
        return(
            <div class="row">
      <h1>Contact Us</h1>
      <div class="col s4" style={{marginLeft: "20px"}}>
        Email: elLathaleeth@gmail.com<br/> 
        Landline: +203356479<br/>
        Mobile: 01004567987
      </div>
      <div class="col s4">
        <h3>Visit Us</h3>
        El Lathaleeth HQ<br/> 
        German University in Cairo

      </div>
    </div>
        );
    }
}
export default contactUs;
