import React, { Component } from "react";
import { connect } from "react-redux";

// import { Button, Form } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.css";
export class DetailedForm extends Component {
  goedit = e => {
    window.location.hash = "UpdateOneForm/" + this.props.form._id;
  };
  state = { clicked: false };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const review = this.props.tobereviewed;
    let content = "";
    for (let p in this.props.form) {
      if (this.props.form.hasOwnProperty(p)) {
        content += p + " : " + this.props.form[p] + "\n";
      }
    }
    let editButton;
    const filteredComments = this.props.form.comments.filter(a => {
      console.log(a);
      return !a.hasOwnProperty("read_at");
    });
    const newforms = filteredComments.filter(e => {
      return e.status === "pending reviewer" && e.comments.length > 0;
    });
    if (
      this.props.form.status === "pending reviewer" &&
      filteredComments.length > 0
    ) {
      editButton = (
        <div>
          <button
            type="button"
            onClick={this.goedit.bind(this)}
            class="btn btn-success"
          >
            Edit Form
          </button>
        </div>
      );
    } else {
      editButton = "";
    }
    console.log(this.props.loggedUser);
    return (
      <div class="card">
        <div class="card-header">{this.props.form.formType}</div>
        <div class="card-body">
          <h5 class="card-title">Mr./Mrs. {this.props.form.investor.name}</h5>
          <p class="card-text">
            <p>ID: {this.props.form._id}</p>
            <p>Law: {this.props.form.law}</p>
            <p>Legal Form: {this.props.form.legalForm}</p>
            <p>Form Type: {this.props.form.formType}</p>
            <p>Address: {this.props.form.address}</p>
            <p>Phone Number: {this.props.form.phone}</p>
            <p> Number: {this.props.form.fax}</p>
            <p>Created On: {this.props.form.createdOn}</p>
            <p>Capital Currency: {this.props.form.capitalCurr}</p>
            <p>Capital Value: {this.props.form.capitalVal}</p>

            {this.props.form.boardOfDirectors.map(BoardOfDirector => (
              <div>
                <p>--Board Of Directors--</p>
                Name: {BoardOfDirector.name}
                <p />
                Nationality: {BoardOfDirector.nationality}
                <p />
                Address: {BoardOfDirector.address}
                <p />
                Gender: {BoardOfDirector.gender}
                <p />
                BirthDate: {BoardOfDirector.birthdate}
                <p />
                ID: {BoardOfDirector.idNum}
                <p />
                Type Of ID: {BoardOfDirector.typeID}
                <p />
                Position: {BoardOfDirector.position}
                <p />
              </div>
            ))}
            {this.props.form.comments.map(comment => (
              <div>
                Comment:{comment.text}
                <p />
              </div>
            ))}
            {review && (
              <div class="ui input">
                <ul>
                  <li>
                    <input
                      type="text"
                      placeholder="Write comment"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={this.props.addComment.bind(
                        this,
                        this.props.form._id,
                        {
                          author_type: this.props.loggedUser.type,
                          author: this.props.loggedUser.id,
                          text: this.state.value,
                          postedOn: new Date()
                        }
                      )}
                      class="btn btn-outline-secondary btn-sm"
                    >
                      {" "}
                      Add Comment
                    </button>{" "}
                  </li>
                </ul>
              </div>
            )}
          </p>
          {review && (
            <button
              type="button"
              onClick={this.props.reviewForm.bind(
                this,
                this.props.loggedUser.id,
                this.props.form._id
              )}
              class="btn btn-success"
            >
              Approve This Case
            </button>
          )}
          {this.props.pay && (
            <div>
              <button
                type="button"
                onClick={this.props.pay.bind(this, this.props.form._id)}
                class="btn btn-success"
              >
                Pay Fees
              </button>
            </div>
          )}
          {editButton}
        </div>
        {/* <Form reply>
                       <Form.TextArea />
                       <Button content='Add Comment' labelPosition='left' icon='edit' primary />
                   </Form> */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});
export default connect(mapStateToProps)(DetailedForm);
