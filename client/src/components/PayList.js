import React, { Component } from "react";
import { connect } from "react-redux";
import PayItem from "./PayItem";
class PayList extends Component {
  render() {
      return this.props.forms
        .map(form => (
          <PayItem form={form} pay={this.props.pay} />
        ));
    
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});

export default connect(mapStateToProps)(PayList);
