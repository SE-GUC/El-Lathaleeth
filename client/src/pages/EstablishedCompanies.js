import React, { Component } from "react";
import MyCompanies from "../components/MyCompanies";
import { connect } from "react-redux";
const axios = require("axios");

class EstablishedCompanies extends Component {
  state = { companies: [] };

  componentDidMount = async () => {
    await axios.get("https://lathaleeth.herokuapp.com/api/forms/").then(result => {
      this.setState({ companies: result.data.data });
    });
  };

  render() {
    let text
    if(this.props.isEnglish){
      text="Establshed Companies:"
    }
    else{
      text="الشركات"
    }
    return (
      <div className="EstablishedCompanies">
        <div className="col-md-3 col-md-offset-6">
          <h4>{text}</h4>
        </div>
        <div className="row offset-sm-1">
          <MyCompanies companies={this.state.companies} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isEnglish: state.nav.isEnglish
});
export default connect(mapStateToProps)(EstablishedCompanies);
