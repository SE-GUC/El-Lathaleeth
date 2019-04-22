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
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/"
              onClick={this.logout}
            >
              {this.props.isEnglish && <div> Log Out</div>}
              {!this.props.isEnglish && <div>الخروج</div>}
            </NavLink>
          </li>
          <li>
            {(this.props.loggedUser.type === "Lawyer" ||
              this.props.loggedUser.type === "Reviewer") && (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/lawyer_workspace"
                className="logo"
              >
                <i className="material-icons" to="/lawyer_workspace">
                  face
                </i>
              </NavLink>
            )}
            {this.props.loggedUser.type === "investor" && (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/InvestorPage"
                className="logo"
              >
                <i className="material-icons" to="/lawyer_workspace">
                  face
                </i>
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser,
  isEnglish: state.nav.isEnglish
});

export default connect(
  mapStateToProps,
  { logout }
)(SignedIn);
