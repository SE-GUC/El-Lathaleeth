import React, { Component } from "react";
import MyCompanies from "../components/MyCompanies";

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
          <h4>Established Companies:</h4>
        </div>
        <div className="row offset-sm-1">
          <MyCompanies companies={this.state.companies} />
        </div>
      </div>
    );
  }
}

export default EstablishedCompanies;
