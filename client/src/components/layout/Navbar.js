import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import Sidenav from "./Sidenav";
import SignedIn from "./SignedIn";
import { connect } from "react-redux";
import SignedOut from "./SignedOut";
import SignIn from "../auth/SignIn";
import img from "../Assets/Sumergepng.png"

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
            <i className="material-icons">donut_small</i>
            {/* <img src={img} style={{  height: 100,  width: 180, borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    borderWidth: 1,}} className="logo" alt="Sumerge" /> */}
            Sumerge Lathaleeth
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
