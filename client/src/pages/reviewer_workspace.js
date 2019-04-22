import React, { Component } from "react";
import Cards from "../components/Cards";

const axios = require("axios");

class reviewer_workspace extends Component {
  state = { pending_forms: [], reviewed_forms: []};

  componentDidMount = async () => {
    const reviewerinfo = await axios
      .get(
        "https://lathaleeth.herokuapp.com/api/entity_emp/workSpace/5ca9ea8fd0935b3388eaa962"
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          pending_forms: res.data.pending_forms,
          reviewed_forms: res.data.reviewed_forms
        });
      });
  };

  render() {
    console.log(this.state);
    const pending_forms = this.state.pending_forms;
    const reviewed_forms = this.state.reviewed_forms;
    
    return (
      <div className="reviewer_workspace">
        <div className="Reviewer Pending Forms">
          {pending_forms.length > 0 && <h4>Pending Forms:</h4>}
          {pending_forms.length > 0 && <Cards forms={pending_forms}  tobereviewed={true}/>}
        </div>
        <div className="Reviewed Forms">
          {reviewed_forms.length > 0 && <h4>Reviewed Forms:</h4>}
          {reviewed_forms.length > 0 && <Cards forms={reviewed_forms}  tobereviewed={false}/>}
        </div>
      </div>
    );
  }
}

export default reviewer_workspace;