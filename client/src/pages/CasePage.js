import React, { Component } from "react";
import CaseList from "../components/CaseList";
const axios = require("axios");

// const form_funcs = require("./funcs/form_funcs");
class CasePage extends Component {
  // constructor() {
  //   super();
  //   const formsData = await axios.get("http://localhost:5000/api/forms/");

  //   this.state = { forms:formsData.data.data };
  // }
  state = { forms: [], displayedForms: [], caseNumber: "" };
  //view all cases
  componentWillMount = async () => {
    const formsData = await axios
      .get("http://localhost:5000/api/forms/")
      .then(res => {
        console.log(res.data.data);
        this.setState({
          forms: res.data.data,
          displayedForms: res.data.data
        });
      });
  };

  render() {
    console.log(this.state.displayedForms);
    return (
      <div>
        <form>
          Enter Case Number:
          <input
            type="text"
            name="caseNumber"
            placeholder="Search..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={this.sortCreationDate.bind(this)}>
            Sort By Creation Date
          </button>
          <button onClick={this.sortCaseNum.bind(this)}>
            Sort By Case Number
          </button>
        </form>
        <div className="CasePage">
          <CaseList
            forms={this.state.displayedForms}
          />
        </div>
      </div>
    );
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    if (value !== "") {
      this.setState({
        displayedForms: this.state.forms.filter(form => {
          return form.caseNumber === parseInt(value);
        })
      });
    } else {
      this.setState({ displayedForms: this.state.forms });
    }
  };
  //search case
  searchForm = async e => {
    e.preventDefault();
    console.log(this.state.value);
    this.setState({
      displayedForms: this.state.forms.filter(form => {
        return form.caseNumber === this.state.caseNumber;
      })
    });
  };
  //sort by creation date
  sortCreationDate = async e => {
    e.preventDefault();

    var temp;
    var formTemp = this.state.forms;
    console.log(formTemp);
    for (var i = 1; i < formTemp.length; i++) {
      for (var j = i; j > 0; j--) {
        if (formTemp[j].createdOn < formTemp[j - 1].createdOn) {
          temp = formTemp[j];
          formTemp[j] = formTemp[j - 1];
          formTemp[j - 1] = temp;
        }
      }
    }
    console.log(formTemp);

    this.setState({
      forms: formTemp
    });
  };
  sortCaseNum = async e => {
    e.preventDefault();

    var temp;
    var formTemp = this.state.forms;
    for (var i = 1; i < formTemp.length; i++) {
      for (var j = i; j > 0; j--) {
        if (formTemp[j].caseNumber < formTemp[j - 1].caseNumber) {
          temp = formTemp[j];
          formTemp[j] = formTemp[j - 1];
          formTemp[j - 1] = temp;
        }
      }
    }
    this.setState({
      forms: formTemp
    });
  };
  reserveForm = async (idl, id) => {
    this.setState({
      displayedForms: this.state.displayedForms.filter(form => {
        return form._id !== id;
      })
    });

    const reserve = await axios.put(
      "http://localhost:5000/api/entity_emp/reserveForm/" +
        idl +
        "/" +
        id
    );
  };
}

export default CasePage;
