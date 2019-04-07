import React, { Component } from "react";
import Status_Card from "../components/Status_Card";
import "bootstrap/dist/css/bootstrap.css";

const axios = require("axios");

class trackCasePage extends Component {

    state = { formStatus:"" };

    // componentDidMount = async () => {
       
    // };
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    search= async(id)=>{
        const stat = await axios.get(
          "http://localhost:5000/api/forms//statusByID/"+id
        );
        this.setState({formStatus:stat.data.data})
    }
    render() {
        console.log(this.state.companies);
        return (
          <div className="trackCasePage">
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
            </div>
            <Status_Card formStatus={this.state.formStatus} />
          </div>
        );
    }

}


export default trackCasePage;