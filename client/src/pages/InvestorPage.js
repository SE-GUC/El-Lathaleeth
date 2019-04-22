import React, { Component } from "react";
import { connect } from "react-redux";
import MyCompanies from "../components/MyCompanies";
import TrackCasePage from "./trackCasePage";

const axios = require("axios");

class InvestorPage extends Component {
  state = { companies: [] };

  componentDidMount = async () => {
    console.log(this.props.loggedUser);
    await axios
      .get(
        "http://localhost:5000/api/forms/byInvestorID/" +
          this.props.loggedUser.id
      )
      .then(result => {
        console.log(result.data.data);
        this.setState({ companies: result.data.data });
      });
      
  };

  render() {
    
    console.log(this.state.companies);
    return (
      <div className="InvestorPage">
       
        <div className="col-md-3 col-md-offset-6">
        <TrackCasePage/>
          <h4>My Established Companies:</h4>
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
  loggedUser: state.auth.loggedUser
});

export default connect(mapStateToProps)(InvestorPage);
