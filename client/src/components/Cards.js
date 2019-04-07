import React, { Component } from "react";
import FormCard from "./FormCard";
class Cards extends Component {
  render() {
    const bool = this.props.tobereviewed;
    return this.props.forms.map(form => (
      <FormCard form={form} tobereviewed={bool} />
    ));
  }
}

export default Cards;
