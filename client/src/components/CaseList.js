import React, { Component } from "react";
import CaseDetailed from "./CaseDetailed";
class CaseList extends Component {
  render() {
    return this.props.forms.map(form => (
      <CaseDetailed
        form={form}
      />
    ));
  }
}

export default CaseList;
