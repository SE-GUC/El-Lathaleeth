import React, { Component } from "react";
import MyCompanies from "../components/MyCompanies";

const axios = require("axios");

class InvestorPage extends Component {

    state = { companies: [] };

    componentDidMount = async () => {
         await axios.get(
            "http://localhost:5000/api/forms/byInvestorID/5ca9f62ef9820e4cd8601fce"
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
                <MyCompanies companies={this.state.companies} />
            </div>
        );
    }

}


export default InvestorPage;