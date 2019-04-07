import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export class FormCard extends Component {
  state = { clicked: false };
  render() {
    return (
      <div class="card">
        <div class="card-header">
          {this.props.form.englishName} - {this.props.form.arabicName}
        </div>
        <div class="card-body">
          {this.props.form.investor.gender === "male" && (
            <h5 class="card-title">Mr. {this.props.form.investor.lastName}</h5>
          )}
          {this.props.form.investor.gender === "female" && (
            <h5 class="card-title">Mrs. {this.props.form.investor.lastName}</h5>
          )}
          <p class="card-text">
            status: {this.props.form.status}, updated by:{" "}
            {this.props.form.lastTouch}, must be filled by:{" "}
            {this.props.form.deadline}
          </p>
          <a href="#" class="card-link">
            View Form Details
          </a>
          {this.props.tobereviewed && (
            <a href="#" class="card-link">
              Review Form
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default FormCard;
