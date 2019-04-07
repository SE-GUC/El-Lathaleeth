import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
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
              "5ca9ea8fd0935b3388eaa962",
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

export default ListItem;
