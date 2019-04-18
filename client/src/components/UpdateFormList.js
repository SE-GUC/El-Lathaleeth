import React, { Component } from "react";
import { connect } from "react-redux";
import UpdateFormListItem from "./UpdateFormListItem";
class UpdateFormList extends Component {
  render() {
      return this.props.forms
        .map(form => (
          <UpdateFormListItem form={form} />
        ));
  
     
    
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});

export default connect(mapStateToProps)(UpdateFormList);
