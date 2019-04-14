import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SignedIn extends Component {
  render() {
    return (
      <div>
        <ul className="right">
          <li>
            <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
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

export default SignedIn;
