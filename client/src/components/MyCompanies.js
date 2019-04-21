import React, { Component } from "react";
import Company from "./Company";
import FormCard from "./FormCard";
class MyCompanies extends Component {

  render() {
    return this.props.companies.map(form => (
      <FormCard form={form} tobereviewed={false} reviewForm={false} addComment={false}/>
    ));
  }
}

export default MyCompanies;