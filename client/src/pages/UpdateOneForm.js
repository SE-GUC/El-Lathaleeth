import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import UpdateFormList from "../components/UpdateFormList";

const axios = require("axios");

class UpdateOneForm extends Component {
  state = { forms: [] };

  componentDidMount = async () => {
      
  };

  render() {
    return (
      <div>
        <UpdateFormList forms={this.state.forms} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});
export default connect(mapStateToProps)(UpdateOneForm);
