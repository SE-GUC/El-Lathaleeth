import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import Sidenav from "./Sidenav";
import SignedIn from "./SignedIn";
import { connect } from "react-redux";
import SignedOut from "./SignedOut";
import SignIn from "../auth/SignIn";
import PropTypes from "prop-types";
import { remember } from "../../globalState/actions/authActions";
class Navbar extends Component {
  componentDidMount = async () => {
    const token = localStorage.getItem("jwtToken");
    if (token !== null) {
      this.props.remember(token);
    }
  };
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
          {this.props.isLoggedIn && <SignedIn />}
          {!this.props.isLoggedIn && <SignedOut />}
        </div>
      </nav>
    );
  }
}
Navbar.propTypes = {
  remember: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});

export default connect(
  mapStateToProps,
  { remember }
)(Navbar);