import React, { Component } from "react";
import Company from "./Company";
import FormCard from "./FormCard";
class MyCompanies extends Component {

  render() {
<<<<<<< HEAD
    return this.props.companies.map(form => (
      <FormCard form={form} tobereviewed={false} reviewForm={false} addComment={false}/>
    ));
=======
    return this.props.companies
      .filter(form => {
        return form.status === "paid";
      })
      .map(form => (
        <Company form={form} />
      ));
>>>>>>> 248a0cb6b0756109cda0504c43961f1802abb280
  }
}

export default MyCompanies;
