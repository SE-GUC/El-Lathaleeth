import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
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
    let displayed
    let lawyerstuff = (
      <div>
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
          <a href="#/lawyer_workspace" class="sidenav-close">
            Fill Form for Investor
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
      </div>
    );
    let reviewerstuff = (
      <div>
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
      </div>
    );
    let investorstuff = (
      <div>
        <li>
          <a className="subheader grey darken-3">Investor</a>
        </li>
        <li>
          <a href="#/InvestorPage" class="sidenav-close">
            My Companies
          </a>
        </li>
        <li>
          <a href="#/trackCasePage" class="sidenav-close">
            Track my Case
          </a>
        </li>
        <li>
          <a href="#/FillForm" class="sidenav-close">
            Fill Form
          </a>
        </li>
        <li>
          <a href="#/InvestorPage" class="sidenav-close">
            My Profile
          </a>
        </li>
      </div>
    );
    let adminstuff=<div>
      <li>
            <a className="subheader grey darken-3">Admin</a>
          </li>
          <li>
            <a href="#/RegisterEmployee">Register Employees</a>
          </li>
          <li>
            <a href="#/CasePage">View All Cases</a>
          </li>
          </div>
          try{
          if(this.props.loggedUser.type==='Lawyer' ){
            displayed=lawyerstuff
          }else if (this.props.loggedUser.type==='Reviewer'){
                        displayed = reviewerstuff;

          }
          else if (this.props.loggedUser.type==="Admin"){
            displayed=adminstuff
          }
          else if (this.props.loggedUser.type==="investor"){
            displayed=investorstuff
          }
          else{displayed=""}}
          catch(e){displayed=""}
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          {/* <li />
          {lawyerstuff}
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader grey darken-3">Investor</a>
          </li>
          <li>
            <a href="#/ViewInvestorProfile"className="sidenav-close">My Profile</a>
          </li>
          <li>
            <a href="#/InvestorPage"className="sidenav-close">My Companies</a>
          </li>
          <li>
            <a href="#/trackCasePage" className="sidenav-close">
              Track my Case
            </a>
          </li>
          <li>
            <div className="divider" />
          </li>

          {adminstuff} */}
         
          {displayed}
        </ul>
        <a
          href="#"
          data-target="slide-out"
          className="sidenav-trigger show-on-large"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});

export default connect(
  mapStateToProps
)(Sidenav);
// export default Sidenav

