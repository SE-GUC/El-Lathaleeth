import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
export class UpdateFormListItem extends Component {
 goedit =  e => {
 window.location.hash = "UpdateOneForm/" + this.props.form._id;
 }
  state = { clicked: false };
  render() {
    return (
      <div class="card">
        <div class="card-header">{this.props.form.formType}</div>
        <div class="card-body">
          <h5 class="card-title">
            Mr./Mrs. {this.props.form.investor.name}
          </h5>
          <p class="card-text" />
          <button
            type="button"
            class="btn btn-danger"
onClick={this.goedit.bind(this)}          >
            Edit Form
          </button>{" "}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});
export default connect(mapStateToProps)(UpdateFormListItem);
