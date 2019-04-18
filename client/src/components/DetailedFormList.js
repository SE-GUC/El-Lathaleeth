import React, { Component } from "react";
import DetailedForm from "./DetailedForm";
class DetailedFormList extends Component {
  render() {
    return this.props.forms.map(form => (
      <DetailedForm form={form} tobereviewed= {true} reviewForm={this.props.reviewForm} addComment={this.props.addComment} />
    ));
  }
}

export default DetailedFormList;
