import React, { Component } from "react";
import DetailedForm from "./DetailedForm";
class DetailedFormList extends Component {
  render() {
    return this.props.forms.map(form => (
      <DetailedForm form={form} reviewForm={this.props.reviewForm} />
    ));
  }
}

export default DetailedFormList;
