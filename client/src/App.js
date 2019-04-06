import React, { Component } from "react";
import FormList from "./components/FormList";
import "./App.css";
const axios = require("axios");

// const form_funcs = require("./funcs/form_funcs");
class App extends Component {
  state = {
    forms: [
      {
        _id: "5ca8d966edac983144bbbc4b",
        law: "12345",
        legalForm: "blabla",
        formType: "SSC",
        arabicName: "sd",
        englishName: "testing",
        address: "helloo",
        phone: "01111111111",
        fax: "2222",
        investor: {
          _id: "5ca7ebe1728fd929bc28ca7e",
          firstName: "updatedfirstname2",
          middleName: "updatedmiddlename2",
          lastName: "updatedlastname2",
          gender: "female",
          nationality: "Egyptian",
          investorType: "individual",
          typeOfID: "id",
          IDNumber: "1234567890",
          dateOfBirth: "1999-09-19T00:00:00.000Z",
          address: "my address",
          phoneNumber: "01234567890",
          faxNumber: "1234A1234",
          creditCardNumber: "4024007158885060",
          email: "some_email@gmail.com",
          capital: 100000,
          capitalCurrency: "Euro",
          __v: 0,
          investorFormID: "5ca7ebe1728fd929bc28ca7e"
        },
        comments: [],
        createdOn: "2019-03-29T00:00:00.000Z",
        capitalCurr: "EGP",
        capitalVal: 1000000,
        boardOfDirectors: [
          {
            _id: "5ca7ebe1d456591224d19043",
            address: "addrf dfdfdess",
            birthdate: "1970-03-25T00:00:00.000Z",
            gender: "male",
            idNum: "1234567876",
            name: "Mohamed",
            nationality: "Egypt",
            position: "manager",
            typeID: "passport",
            typeInves: "individual"
          }
        ],
        __v: 0
      },
      {
        _id: "5ca8d966edac983144bbbc4b",
        law: "12345",
        legalForm: "blabla",
        formType: "SSC",
        arabicName: "sd",
        englishName: "testing",
        address: "helloo",
        phone: "01111111111",
        fax: "2222",
        investor: {
          _id: "5ca7ebe1728fd929bc28ca7e",
          firstName: "updatedfirstname2",
          middleName: "updatedmiddlename2",
          lastName: "updatedlastname2",
          gender: "female",
          nationality: "Egyptian",
          investorType: "individual",
          typeOfID: "id",
          IDNumber: "1234567890",
          dateOfBirth: "1999-09-19T00:00:00.000Z",
          address: "my address",
          phoneNumber: "01234567890",
          faxNumber: "1234A1234",
          creditCardNumber: "4024007158885060",
          email: "some_email@gmail.com",
          capital: 100000,
          capitalCurrency: "Euro",
          __v: 0,
          investorFormID: "5ca7ebe1728fd929bc28ca7e"
        },
        comments: [],
        createdOn: "2019-03-29T00:00:00.000Z",
        capitalCurr: "EGP",
        capitalVal: 1000000,
        boardOfDirectors: [
          {
            _id: "5ca7ebe1d456591224d19043",
            address: "addrf dfdfdess",
            birthdate: "1970-03-25T00:00:00.000Z",
            gender: "male",
            idNum: "1234567876",
            name: "Mohamed",
            nationality: "Egypt",
            position: "manager",
            typeID: "passport",
            typeInves: "individual"
          }
        ],
        __v: 0
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <FormList reserveForm={this.reserveForm} forms={this.state.forms} />
      </div>
    );
  }
  
  // componentDidMount() {
  //   this.setState(async state => {
  //     return { forms: await form_funcs.getForms() };
  //   });
  // }
  reserveForm = async (idl, id) => {
    console.log(idl)
    console.log(id);
    const reserve = await axios.put(
      "http://localhost:5000/api/forms/reviewerReview/" + idl + "/" + id
    );
  };
}

export default App;
