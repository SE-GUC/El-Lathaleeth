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
        "https://lathaleeth.herokuapp.com/api/forms/byInvestorID/" +
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
        {this.props.isEnglish && <h4>My Established Companies</h4>}
          {!this.props.isEnglish && <h4>شركاتي </h4>}
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
  isEnglish: state.nav.isEnglish
});

export default connect(mapStateToProps)(InvestorPage);
