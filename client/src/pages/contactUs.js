 import React, { Component } from "react";

 import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const axios = require("axios");

class contactUs extends Component {
    render(){
        return(
            <div class="row">
      <h1>How to reach us</h1>
      <div class="col s4" style={{marginLeft: "25px"}}>
      <h3>Contact Us</h3>
        Email: elLathaleeth@gmail.com<br/> 
        Landline: +203356479<br/>
        Mobile: 01004567987<br/>
        Write to us: Summerge El Lathaleeth<br/>
        P.O. Box 1734<br/>
        Cairo, CA 30307, Egypt
      </div>
      <div class="col s4">
        <h3>Visit Us</h3>
        El Lathaleeth HQ<br/> 
        German University in Cairo,<br/>
         Gamal Abd El-Nasir St.,<br/>
          New Cairo City<br/>
        <Map google={this.props.google} zoom={13}
        style={{height: '225px', width: '350px'}}
        initialCenter={{
          lat: 29.9877551,
          lng: 31.4419748}}>
 
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
