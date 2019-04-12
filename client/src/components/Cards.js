import React, { Component } from "react";
import FormCard from "./FormCard";
class Cards extends Component {
  render() {
    const bool = this.props.tobereviewed;
    return (
      <div class="row">
        {this.props.forms.map(form => (
          <div class="col s4">
            <FormCard form={form} tobereviewed={bool} />
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
