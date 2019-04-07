import React, { Component } from "react";
import ListItem from "./ListItem";
class FormList extends Component {
  render() {
    return this.props.forms.filter(form=>{return form.status==="posted"}).map(form => (
      <ListItem  form={form} reserveForm={this.props.reserveForm}/>
    ));
  }
}

export default FormList;
