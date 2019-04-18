import React, { Component } from "react";
import PayList from "../components/PayList";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
const axios = require("axios");

class PayPage extends Component {
  state = { forms: [] };

  componentDidMount = async () => {
    const forms = await axios.get(
      "http://localhost:5000/api/forms/byInvestorID/" + this.props.loggedUser.id
    );
    this.setState({
      forms: forms.data.data.filter(e => {
        return e.status === "reviewer check";
      })
    });
  };
  pay = async (id) => {
    this.setState({
      forms: this.state.forms.filter(form => {
        return form._id !== id;
      })
    });

    const reserve = await axios.put(
      "http://localhost:5000/api/forms/formPaid/"+ id
    );
  };
  render() {
    return (
      <div className="PayPage">
        <PayList pay={this.pay} forms={this.state.forms} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});
export default connect(mapStateToProps)(PayPage);