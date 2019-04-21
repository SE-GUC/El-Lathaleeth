 import React, { Component } from "react";

 import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

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
        <Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>

 </InfoWindow>
</Map>
      </div>
    </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBEaRKbZ_Q6moHl6yTryvh695fMyhCf3G8")
})(contactUs)
