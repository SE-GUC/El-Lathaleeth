import React, { Component } from "react";
import FormList from "../components/FormList";
const axios = require("axios");

// const form_funcs = require("./funcs/form_funcs");
class LawyerPage extends Component {
  // constructor() {
  //   super();
  //   const formsData = await axios.get("http://localhost:5000/api/forms/");

  //   this.state = { forms:formsData.data.data };
  // }
  state = { forms: [] };
  componentDidMount = async () => {
    const formsData = await axios
      .get("http://localhost:5000/api/forms/")
      .then(res => {
        console.log(res.data.data);
        this.setState({ forms: res.data.data });
      });
  };

  render() {
    console.log(this.state.forms);
    return (
      <div className="LawyerPage">
        <FormList reserveForm={this.reserveForm} forms={this.state.forms} />
      </div>
    );
  }

  reserveForm = async (idl, id) => {
    this.setState({
      forms: this.state.forms.filter(form => {
        return form._id !== id;
      })
    });

    const reserve = await axios.put(
      "http://localhost:5000/api/entity_emp/reserveForm/" + idl + "/" + id
    );
  };
 
}

export default LawyerPage;
