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
  //view all cases
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
      <div>
        <form>
        Enter Case Number: 
        <input 
          type="text" 
          name="CaseNumber" 
          placeholder="Search..."
          value={this.state.value}
          onChange={e => this.handleChange(e)}
        />
       <button 
       onClick={this.searchForm.bind(this)}
       >
       Search
       </button> 
       <button 
       onClick={this.ViewCases.bind(this)}
       >
       View Cases
       </button> 
       <button 
       onClick={this.sortCreationDate.bind(this)}
       >
       Sort By Creation Date
       </button> 
       <button 
       onClick={this.sortCaseNum.bind(this)}
       >
       Sort By Case Number
       </button> 
        </form>
            <div className="LawyerPage">
            <FormList reserveForm={this.reserveForm} forms={this.state.forms} />
            </div>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
        value: e.target.value
    })
}
//view all cases
ViewCases = async () => {
  const formsData = await axios
    .get("http://localhost:5000/api/forms/")
    .then(res => {
      console.log(res.data.data);
      this.setState({ forms: res.data.data });
    });
};
//search case
  searchForm = async() => {
    this.setState({
      forms: this.state.forms.filter(form => {
        return form._id === this.state.value;
      })
    });
  }
//sort by creation date
sortCreationDate = async() =>{
  var temp
  var formTemp  = new Array(this.state.forms)
  for(var i=1;i<formTemp.length;i++){
    for(var j=i;j>0;j--){
      if(formTemp[j].createdOn<formTemp[j-1].createdOn){
        temp = formTemp[j]
        formTemp[j] = formTemp[j-1] 
        formTemp[j-1] = temp
      }
    }
  }
  this.setState({
    forms:formTemp
  }) 
}
//sort by case number
  sortCaseNum = async() =>{
    var temp
    var formTemp  = new Array(this.state.forms)
for(var i=1;i<formTemp.length;i++){
    for(var j=i;j>0;j--){
      if(formTemp[j].caseNumber<formTemp[j-1].caseNumber){
        temp = formTemp[j]
        formTemp[j] = formTemp[j-1] 
        formTemp[j-1] = temp
      }
    }
  }
  this.setState({
    forms:formTemp
  })  
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
