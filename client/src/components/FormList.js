import React, { Component } from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";
class FormList extends Component {
  render() {
    if(this.props.loggedUser.type==="Lawyer"){
    return this.props.forms.filter(form=>{return form.status==="posted"}).map(form => (
      <ListItem  form={form} reserveForm={this.props.reserveForm}/>
    ));}
    else {return this.props.forms
            .filter(form => {
              return form.status === "lawyer check";
            })
            .map(form => (
              <ListItem
                form={form}
                reserveForm={this.props.reserveForm}
              />
            ));}
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});

export default connect(
  mapStateToProps
)(FormList);
