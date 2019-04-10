import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

class Sidenav extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li />
          <li>
            <a className="subheader">Lawyer</a>
          </li>
          <li>
            <a href="#/LawyerPage">LawyerPage</a>
          </li>
          <li>
            <a href="#/lawyer_workspace">Workspace</a>
          </li>
          <li>
            <a href="#/lawyerPendingForms">Pending Forms</a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader">Investor</a>
          </li>
          <li>
            <a href="#/InvestorPage">My Companies</a>
          </li>
          <li>
            <a href="#/trackCasePage">Track my Case</a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader">Admin</a>
          </li>
        </ul>
        <a
          href="#"
          data-target="slide-out"
          className="sidenav-trigger show-on-large"
        >
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}

export default Sidenav;
