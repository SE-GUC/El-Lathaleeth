import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { DetailedForm } from "./DetailedForm";
import { connect } from "react-redux";
import Center from "react-center";

export class FormCard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
  render() {
    const { open } = this.state;
    return (
      <Center>
          <div class="card" >
            <div class="card-content">
              <span class="card-title">
                {this.props.form.englishName} - {this.props.form.arabicName}
              </span>
              <p class="card-text">Case Number: {this.props.form.caseNum}</p>
              <Button
                className="right shadow-none p-0 mb-5 bg-light rounded "
                variant="link"
                onClick={() => this.setState({ open: !open })}
                aria-controls="detailedForm"
                aria-expanded={open}
              >
                <i className="material-icons">arrow_drop_down</i>
              </Button>
              <Collapse in={this.state.open}>
                <div id="detailedForm">
                  {console.log(this.props.loggedUser)}
                  <DetailedForm
                    form={this.props.form}
                    tobereviewed={this.props.tobereviewed}
                    reviewForm={this.props.reviewForm}
                    addComment={this.props.addComment}
                    isLoggedIn={this.props.isLoggedIn}
                    loggedUser={this.props.loggedUser}
                  />
                </div>
              </Collapse>
            </div>
          </div>
      </Center>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});

export default connect(mapStateToProps)(FormCard);
