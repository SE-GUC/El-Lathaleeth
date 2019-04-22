import React, { Component } from "react";
import Image from 'react-image-resizer';
import souidan from  "../components/Assets/imgs/souidan.jpeg";
import laithy from "../components/Assets/imgs/laithy.jpeg";
import lina from "../components/Assets/imgs/lina.jpeg";
import abougabal from "../components/Assets/imgs/abougabal.jpeg";
import nakka from "../components/Assets/imgs/nakka.jpeg";
import badr from "../components/Assets/imgs/badr.jpeg";
import nadeen from "../components/Assets/imgs/nadeen.jpeg";
import peter from "../components/Assets/imgs/peter.jpeg";
import df from "../components/Assets/imgs/default.jpeg";

const axios = require("axios");

class meetUs extends Component {
    render(){
        return(
<div class="row">
    <h1>Meet El Lathaleeth</h1>
        <div class="column">
            <div class="card card-custom mx-2 mb-3">
                 <img class="card-img-top" src={souidan} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Ali Souidan</h4>
    <p class="card-text">Project Manager</p>
        </div>
    </div>
</div>

<div class="column">
        <div class="card card-custom mx-2 mb-3">
        <img class="card-img-top" src={lina}  alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Lina Eweis</h4>
    <p class="card-text">Functional Manager</p>
        </div>
    </div>
</div>

<div class="column">
        <div class="card card-custom mx-2 mb-3">
        <img class="card-img-top" src={laithy}  alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Amr El-Laithy</h4>
    <p class="card-text">Frontend Developer</p>
        </div>
    </div>
</div>

<div class="column">
        <div class="card card-custom mx-2 mb-3">
        <img class="card-img-top" src={nadeen} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Nadeen Amr</h4>
    <p class="card-text">Database Adminstrator</p>
        </div>
    </div>
</div>

<div class="column">
        <div class="card card-custom mx-2 mb-3">
        <img class="card-img-top" src={badr} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Hussein Badr</h4>
    <p class="card-text">Software Architect</p>
        </div>
    </div>
</div>

<div class="column">
        <div class="card card-custom mx-2 mb-3">
        <img class="card-img-top" src={nakka} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Abdelrahman El Nakka</h4>
    <p class="card-text">Test Analyst</p>
        </div>
    </div>
</div>

<div class="column">
        <div class="card card-custom mx-2 mb-3">
        <img class="card-img-top" src={abougabal} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Youssef Abougabal</h4>
    <p class="card-text">Backend Developer</p>
        </div>
    </div>
</div>

<div class="column">
        <div class="card card-custom mx-2 mb-3">
        <img class="card-img-top" src={peter} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Peter Samir</h4>
    <p class="card-text">Backend Developer</p>
        </div>
    </div>
</div>

<div class="column">
        <div class="card card-custom mx-2 mb-3">
        <img class="card-img-top" src={df} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Youssef El Sebaei</h4>
    <p class="card-text">Stake Holder</p>
        </div>
    </div>
</div>

</div>
        );
    }
}
export default meetUs;
