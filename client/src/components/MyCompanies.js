import React, { Component } from "react";
import Company from "./Company";
import FormCard from "./FormCard";
class MyCompanies extends Component {

  render() {
    
    return this.props.companies
      .filter(form => {
        return form.status === "paid";
      })

      .map(form => (
      <FormCard form={form} tobereviewed={false} paid={false} reviewForm={false} addComment={false}/>
      ));
  }
}

export default MyCompanies;
 