import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
export class ListItem extends Component {
  state = { clicked: false };
  render() {
          
    return (
      <div class="card">
        <div class="card-header">{this.props.form.formType}</div>
        <div class="card-body">
          <h5 class="card-title">
            Mr./Mrs. {this.props.form.investor.firstName}
          </h5>
          <p class="card-text" />
          <button
            type="button"
            onClick={this.props.reserveForm.bind(
              this,
              this.props.loggedUser.id,
              this.props.form._id
            )}
            class="btn btn-danger"
          >
            Reserve This Case
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
export default connect(
  mapStateToProps
)(ListItem);

