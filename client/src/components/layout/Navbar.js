import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import Sidenav from "./Sidenav";
import SignedIn from "./SignedIn";
import { connect } from "react-redux";
import SignedOut from "./SignedOut";
import SignIn from "../auth/SignIn";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { remember } from "../../globalState/actions/authActions";
import { english, arabic } from "../../globalState/actions/navActions";
import { stat } from "fs";
class Navbar extends Component {
  componentDidMount = async () => {
    const token = localStorage.getItem("jwtToken");
    if (token !== null) {
      this.props.remember(token);
    }
  };
  changeLanguage = async () => {
    console.log(this.props.isEnglish);
  if (this.props.isEnglish) {
      this.props.arabic()
    }
    else {
      this.props.english()}
  };

  render() {
    let language;
    if (this.props.isEnglish) {
      language = "English";
    } else {
      language = "عربي";
    }
    console.log(this.props.isEnglish)
    return (
      <nav className="nav-wrapper grey darken-3">
        <Sidenav />

        <div className="container">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/"
            className="brand-logo"
          >
            <i className="material-icons">donut_small</i>Sumerge Lathaleeth{" "}
            {language}
          </Link>
          <div>
            <ul className="right">
              <li>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  onClick={this.changeLanguage}
                >
                  {this.props.isEnglish && <div>Change Language</div>}
                  {!this.props.isEnglish && <div>تغيير اللغة</div>}
                </NavLink>
              </li>
            </ul>
          </div>
          {this.props.isLoggedIn && <SignedIn />}
          {!this.props.isLoggedIn && <SignedOut />}
        </div>
      </nav>
    );
  }
}
Navbar.propTypes = {
  remember: PropTypes.func.isRequired,
  english: PropTypes.func.isRequired,
  arabic: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser,
  isEnglish:state.nav.isEnglish
});

export default connect(
  mapStateToProps,
  { remember, arabic, english }
)(Navbar);
