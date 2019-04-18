import React, { Component } from "react";
// import { Button, Form } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.css";
export class CaseDetailed extends Component {
  state = { clicked: false };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    let content = "";
    for (let p in this.props.form) {
      if (this.props.form.hasOwnProperty(p)) {
        content += p + " : " + this.props.form[p] + "\n";
      }
    }
    return (
      <div class="card">
        <div class="card-header">{this.props.form.formType}</div>
        <div class="card-header">Case Number:{this.props.form.caseNumber}</div>

        <div class="card-body">
          <h5 class="card-title">
            Mr./Mrs. {this.props.form.investor.name}
          </h5>
          <p class="card-text">
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
          </p>
        </div>
        {/* <Form reply>
                       <Form.TextArea />
                       <Button content='Add Comment' labelPosition='left' icon='edit' primary />
                   </Form> */}
      </div>
    );
  }
}

export default CaseDetailed;
