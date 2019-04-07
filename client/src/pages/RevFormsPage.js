import React, { Component } from "react";
import RevForms from "../components/RevForms";
const axios = require("axios");

class RevFormsPage extends Component{
    state = { revform: [] };
    componentDidMount = async (id) => {
        const revforms = await axios
          .get("http://localhost:5000/api/entity_emp/revform/" + id)
          .then(res => {
            console.log(res.data.data);
            this.setState({ revform: res.data.data });
          });
      };
      render() {
        console.log(this.state.revform);
        return (
          <div className="RevFormsPage">
            <RevForms resforms={this.state.revform} />
          </div>
        );
      }   
}
export default RevFormsPage;