import React, { Component } from "react";
import Cards from "../components/Cards";

const axios = require("axios");

class lawyer_workspace extends Component {
  state = { pending_forms: [], reviewed_forms: [], filled_forms: [] };

  componentDidMount = async () => {
    const lawyerinfo = await axios
      .get(
        "http://localhost:5000/api/entity_emp/workSpace/5ca9ea8fd0935b3388eaa962"
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          pending_forms: res.data.pending_forms,
          reviewed_forms: res.data.reviewed_forms,
          filled_forms: res.data.filled_forms
        });
      });
  };

  render() {
    console.log(this.state);
    const pending_forms = this.state.pending_forms;
    const reviewed_forms = this.state.reviewed_forms;
    const filled_forms = this.state.filled_forms;
    return (
      <div className="lawyer_workspace">
        <div className="Pending Forms">
          {pending_forms.length > 0 && <h4>Pending Forms:</h4>}
          {pending_forms.length > 0 && (
            <Cards
              forms={pending_forms}
              tobereviewed={true}
            />
          )}
        </div>
        <div className="Reviewed Forms">
          {reviewed_forms.length > 0 && <h4>Reviewed Forms:</h4>}
          {reviewed_forms.length > 0 && (
            <Cards forms={reviewed_forms} tobereviewed={false} />
          )}
        </div>
        <div className="Filled Forms">
          {filled_forms.length > 0 && <h4>Filled Forms:</h4>}
          {filled_forms.length > 0 && (
            <Cards forms={filled_forms} tobereviewed={false} />
          )}
        </div>
      </div>
    );
  }

  
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});
export default lawyer_workspace;
