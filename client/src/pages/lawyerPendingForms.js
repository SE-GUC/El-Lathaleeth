import React, { Component } from "react";
import DetailedFormList from "../components/DetailedFormList";
import { useAlert } from "react-alert";
const axios = require("axios");

class lawyerPendingForms extends Component {
  state = { forms: [] };
  
  componentDidMount = async () => {
    const formsData = await axios
      .get(
        "http://localhost:5000/api/forms/getPending/5ca9ea8fd0935b3388eaa962"
      )
      .then(res => {
        console.log(res.data.data);
        this.setState({ forms: res.data.data });
      });
  };
  

  render() {
    console.log(this.state.forms);
    return (
      <div className="lawyerPendingForms">
        <DetailedFormList
          reviewForm={this.reviewForm}
          addComment={this.addComment}
          forms={this.state.forms}
        />
      </div>
    );
  }

  reviewForm = async (idl, id) => {
    this.setState({
      forms: this.state.forms.filter(form => {
        return form._id !== id;
      })
    });

    const reserve = await axios.put(
      "http://localhost:5000/api/forms/review/" + idl + "/" + id
    );
  };
  addComment = async (id, body) => {
      //still need to update data viewed when comment is written
    // this.setState({
    //   forms: this.state.forms.map(form => {
    //     if (form._id === id) {
    //       console.log(body);
    //       form.comments.push(body);
    //     }
    //   })
    // });
    console.log(this.state.forms);
    //   useAlert("Comment Submitted")
    const add = await axios.put(
      "http://localhost:5000/api/forms/commentOnForm/" + id,
      body
    );
    const formsData = await axios
      .get(
        "http://localhost:5000/api/forms/getPending/5ca9ea8fd0935b3388eaa962"
      )
      .then(res => {
        console.log(res.data.data);
        this.setState({ forms: res.data.data });
      });
  };
}

export default lawyerPendingForms;
