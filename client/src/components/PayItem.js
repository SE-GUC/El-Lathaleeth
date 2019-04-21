import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
//import PayStripe from "./PayStripe";
export class PayItem extends Component {
  state = { clicked: false };
  render() {
    return (
      <div class="card">
        <div class="card-header">{this.props.form.formType}</div>
        <div class="card-body">
          <h5 class="card-title">Mr./Mrs. {this.props.form.investor.name}</h5>
          <p class="card-text" />
          <button
            type="button"
            onClick={this.props.pay.bind(
              this,
              this.props.form._id
            )}
            class="btn btn-danger"
          >
Pay          </button>{" "}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});
export default connect(mapStateToProps)(PayItem);
