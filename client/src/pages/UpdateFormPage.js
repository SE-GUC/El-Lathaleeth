import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import UpdateFormList from "../components/UpdateFormList";

const axios = require("axios");

class UpdateFormPage extends Component {
  state = { forms: [] };

  componentDidMount = async () => {
    try {
      if (this.props.loggedUser.type === "investor") {
        const forms = await axios.get(
          "https://lathaleeth.herokuapp.com/api/forms/byInvestorID/" +
            this.props.loggedUser.id
        );
        console.log(forms);
        const mappedforms = forms.data.data.map(e => {
          const filteredComments = e.comments.filter(a => {
            console.log(a);
            return !a.hasOwnProperty("read_at");
          });
          console.log(filteredComments);
          e.comments = filteredComments;
          return e;
        });
        console.log(mappedforms);
        const newforms = mappedforms.filter(e => {
          return e.status === "pending lawyer" && e.comments.length > 0;
        });
        console.log(newforms);

        this.setState({ forms: newforms });
      }
    } catch (e) {
      console.log(e);
    }
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
export default connect(mapStateToProps)(UpdateFormPage);
