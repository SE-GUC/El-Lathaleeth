import React, { Component } from "react";
export class FormCard extends Component {
  state = { clicked: false };
  render() {
    return (
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
              <span class="card-title">
                {this.props.form.englishName} - {this.props.form.arabicName}
              </span>

                {this.props.form.investor.gender === "male" && (
                  <h5 class="card-title">
                    Mr. {this.props.form.investor.lastName}
                  </h5>
                )}
                {this.props.form.investor.gender === "female" && (
                  <h5 class="card-title">
                    Mrs. {this.props.form.investor.lastName}
                  </h5>
                )}
                <p class="card-text">
                  status: {this.props.form.status}, updated by:{" "}
                  {this.props.form.lastTouch}, must be filled by:{" "}
                  {this.props.form.deadline}
                </p>
                <div class="card-action">
                  <a href="#">View Form</a>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default FormCard;
