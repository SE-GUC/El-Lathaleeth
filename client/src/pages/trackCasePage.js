import React, { Component } from "react";
import Status_Card from "../components/Status_Card";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
const axios = require("axios");

class trackCasePage extends Component {
  state = { formStatus: "" };

  // componentDidMount = async () => {

  // };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  search = async id => {
    try {
      const forms = await axios.get(
        "http://localhost:5000/api/forms/byInvestorID/" +
          this.props.loggedUser.id
      );
      if (forms.data.data.findIndex(x => x.caseNumber === parseInt(id))!==(-1)) {
        const stat = await axios.get(
          "http://localhost:5000/api/forms/statusByID/" + id
        );
        this.setState({ formStatus: stat.data.data });
      } else {
        this.setState({ formStatus: "This Form wasn't submitted by you" });
      }
    } catch (e) {
      console.log(e);
      this.setState({formStatus: "Form Wasn't Found"})
    }
  };
  render() {
    return (
      <div className="trackCasePage">
      {this.props.isEnglish &&
        <div class="ui input">
          <input
            type="text"
            placeholder="Form ID"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button
            type="button"
            onClick={this.search.bind(this, this.state.value)}
            class="btn btn-outline-secondary btn-sm"
          >
            {" "}
            Track Case    
          </button>{" "}
        </div>}
        {!this.props.isEnglish &&
        <div class="ui input">
          <input
            type="text"
            placeholder= "رقم الاستمارة"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button
            type="button"
            onClick={this.search.bind(this, this.state.value)}
            class="btn btn-outline-secondary btn-sm"
          >
            {" "}
            وضع الاستمارة
            
          </button>{" "}
        </div>}
        <Status_Card formStatus={this.state.formStatus} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser,
  isEnglish: state.nav.isEnglish
});
export default connect(mapStateToProps)(trackCasePage);
