import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class SignedOut extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul
          className="right"
          style={{ textDecoration: "none", color: "white" }}
        >
          <li>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/signup"
            >
              {this.props.isEnglish && <div>Signup</div>}
              {!this.props.isEnglish && <div>إشتراك جديد</div>}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/signin"
            >
              {this.props.isEnglish && <div>Login</div>}
              {!this.props.isEnglish && <div>تسجيل الدخول</div>}
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isEnglish: state.nav.isEnglish
});

export default connect(mapStateToProps)(SignedOut);
