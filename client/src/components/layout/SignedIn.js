import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../globalState/actions/authActions";

class SignedIn extends Component {
  logout = async () => {
    await this.props.logout();
      window.location.hash = "#";

  };
  render() {
    return (
      <div>
        <ul className="right">
          <li>
            <NavLink style={{ textDecoration: "none", color: "white" }} to="/" onClick={this.logout}>
              Log Out
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/"
              className="logo"
            >
              <i className="material-icons">face</i>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});

export default connect(
  mapStateToProps,
  { logout }
)(SignedIn);

