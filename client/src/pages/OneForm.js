import React, { Component } from "react";

import { DetailedForm } from "../components/DetailedForm";

const axios = require("axios");

class OneForm extends Component {
  state = { form : ''};

  componentDidMount = async () => {
    const forminfo = await axios
      .get(
        "http://localhost:5000/api/forms/5cb0e1470ed78e305c715e26"
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          form : res.data.data
        });
      });
      
  };
  componentDidUpdate(prevProps, prevState) {
    console.log('I have new content!', this.state.form);
  }

  render() {
    console.log(this.state);
    return (
      <div className="OneForm">
        <DetailedForm form={this.state.form} reviewForm={this.props.reviewForm} addComment={this.props.addComment} />
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
   
  };
}


export default OneForm;
