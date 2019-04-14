import React, { Component } from "react";
import Navbar from "../components/layout/Navbar";
import img from "../components/Assets/InvestInEgypt.jpg";
import {NavLink} from 'react-router-dom';
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-fluid np-padding">
          <div className="row">
            <div className="col-md-12">
              <img src={img} className="img-fluid center-block" alt="hi" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-outline-light btn-lg">
            <NavLink to = '/signup' style={{color: 'white', textDecoration: 'none'}}>
              Invest Now
            </NavLink>
          </button>
        </div>

        <footer className="page-footer grey darken-3 fixed bottom width-100%">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About</h5>
                <p className="grey-text text-lighten-4">
                  A website by the people for the people.
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Meet Lathaleeth
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <div className="container align left">
              © 2019 Sumerge feat.Lathaleeth
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Homepage;
