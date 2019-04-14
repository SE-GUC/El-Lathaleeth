import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidenav from "./Sidenav";
import SignedIn from "./SignedIn";
import { connect } from "react-redux";
import SignedOut from "./SignedOut";
import SignIn from "../auth/SignIn";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper grey darken-3">
        <Sidenav />
        <div className="container">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/"
            className="brand-logo"
          >
            <i className="material-icons">donut_small</i>Sumerge Lathaleeth
          </Link>
          {this.props.isLoggedIn&&<SignedIn />}
          {(!this.props.isLoggedIn)&&<SignedOut />}
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});

export default connect(mapStateToProps)(Navbar);
