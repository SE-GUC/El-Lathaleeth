import React, { Component } from "react";

const axios = require("axios");

class meetUs extends Component {
    render(){
        return(
            <div class="container">
            <h1>Meet El Lathaleeth</h1>
            <div class="gallery">
                <figure class="gallery__item gallery__item--1">
                    <img src="#" alt="Gallery image 1" class="gallery__img"/>
                </figure>
                <figure class="gallery__item gallery__item--2">
                    <img src="#" alt="Gallery image 2" class="gallery__img"/>
                </figure>
                <figure class="gallery__item gallery__item--3">
                    <img src="#" alt="Gallery image 3" class="gallery__img"/>
                </figure>
                <figure class="gallery__item gallery__item--4">
                    <img src="#" alt="Gallery image 4" class="gallery__img"/>
                </figure>
                <figure class="gallery__item gallery__item--5">
                    <img src="#" alt="Gallery image 5" class="gallery__img"/>
                </figure>
                <figure class="gallery__item gallery__item--6">
                    <img src="#" alt="Gallery image 6" class="gallery__img"/>
                </figure>
                <figure class="gallery__item gallery__item--6">
                    <img src="#" alt="Gallery image 7" class="gallery__img"/>
                </figure>
                <figure class="gallery__item gallery__item--6">
                    <img src="#" alt="Gallery image 8" class="gallery__img"/>
                </figure>
                <figure class="gallery__item gallery__item--6">
                    <img src="#" alt="Gallery image 9" class="gallery__img"/>
                </figure>
            </div>
        </div>
        );
    }
}
export default meetUs;
