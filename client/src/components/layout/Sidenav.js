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
            <a className="subheader grey darken-3">Lawyer</a>
          </li>
          <li>
            <a href="#/LawyerPage" class="sidenav-close">
              LawyerPage
            </a>
          </li>
          <li>
            <a href="#/lawyer_workspace" class="sidenav-close">
              Workspace
            </a>
          </li>
          <li>
            <a href="#/lawyerPendingForms" class="sidenav-close">
              Pending Forms
            </a>
          </li>
          <li>
            <a href="#/CasePage">View All Cases</a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader grey darken-3">Investor</a>
          </li>
          <li>
            <a href="#/ViewInvestorProfile"class="sidenav-close">View Profile</a>
          </li>
          <li>
            <a href="#/InvestorPage"class="sidenav-close">My Companies</a>
          </li>
          <li>
            <a href="#/trackCasePage" class="sidenav-close">
              Track my Case
            </a>
          </li>
          <li>
            <div className="divider" />
          </li>

          <li>
            <a className="subheader grey darken-3">Admin</a>
          </li>
          <li>
            <a href="#/RegisterEmployee">Register Employees</a>
          </li>
          <li>
            <a href="#/CasePage">View All Cases</a>
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
