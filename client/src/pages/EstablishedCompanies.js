import React, { Component } from "react";
import MyCompanies from "../components/MyCompanies";
import { connect } from "react-redux";

const axios = require("axios");

class EstablishedCompanies extends Component {
  state = { companies: [] };

  componentDidMount = async () => {
    await axios.get("http://localhost:5000/api/forms/").then(result => {
      console.log(result.data.data);
      this.setState({ companies: result.data.data });
    });
  };

  render() {
    console.log(this.state.companies);
    return (
      <div className="EstablishedCompanies">
        <div className="col-md-3 col-md-offset-6" >
          {this.props.isEnglish && <h4>Established Companies</h4>}
          {!this.props.isEnglish && <h4>الشركات المعلنة</h4>}
        </div>
        <div className="row offset-sm-1">
          <MyCompanies companies={this.state.companies} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser,
  refresh: state.nav.refresh,
  isEnglish: state.nav.isEnglish
});

export default connect(mapStateToProps)(EstablishedCompanies);
