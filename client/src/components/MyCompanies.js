import React, { Component } from "react";
import Company from "./Company";
class MyCompanies extends Component {

  render() {
    return this.props.companies.map(form => (
      <Company form={form} />
    ));
  }
}

export default MyCompanies;