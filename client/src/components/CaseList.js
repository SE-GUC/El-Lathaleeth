import React, { Component } from "react";
import FormCard from "./FormCard";
class CaseList extends Component {
  render() {
    return this.props.forms.map(form => (
      <FormCard form={form} tobereviewed={false} reviewForm={false} addComment={false}/>
    ));
  }
}

export default CaseList;
