import React, { Component } from "react";
import LawyerInvestorForm from "./LawyerInvestorForm";
import { connect } from "react-redux";
import LawyerForm from "./LawyerForm";
const validator = require("../validations/investorValidations");
const axios = require("axios");
// import UserDetails from "./UserDetails";
// import PersonalDetails from "./PersonalDetails";
// import Confirmation from "./Confirmation";
// import Success from "./Success";
const form1Valid = ({ form1Errors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(form1Errors).forEach(val => {
    val.length > 0 && (valid = false);
  });
 
  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
class LawyerFillForm extends Component {
  constructor(props) {
    super(props);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handle1DateChange = this.handle1DateChange.bind(this);
    this.selectCountry1 = this.selectCountry1.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.selectNationality = this.selectNationality.bind(this);
    this.selectRegion = this.selectRegion.bind(this);
    this.selectRegion1 = this.selectRegion1.bind(this);

    // Set the initial input values
    this.state = {
      boardCount: 0,
      law: "73",
      formType: "SPC",
      legalForm: "null",
      englishName: "",
      phone: null,
      arabicName: null,
      capitalVal: null,
      capitalCurr: "$",
      fax: "",
      address2: null,
      city: null,
      country: null,
      boardOfDirectors: [],

      address1: "",
      city1: "",
      country1: "",
      birthdate: new Date(),
      gender1: "male",
      idNum: "",
      name1: "",
      nationality1: "",
      position: "",
      typeID: "passport",
      typeInves: "individual",
      formErrors: {
        englishName: "",
        idNum: "",
        arabicName: "",
        capitalVal: "",
        nationality1: "",
        typeID: ""
      },
      startDate: new Date(),
      investor: null,
      currentStep: 1, // Default is Step 1
      name: null,
      dateOfBirth: new Date(),
      gender: "",
      nationality: null,
      investorType: null,
      email: null,
      typeOfID: "",
      IDNumber: "",
      address: null,
      phoneNumber: null,
      faxNumber: null,
      creditCardNumber: null,
      form1Errors: {
        name: "",
        dateOfBirth: "",
        gender: "",
        nationality: "",
        investorType: "",
        email: "",
        typeOfID: "",
        IDNumber: "",
        address: "",
        phoneNumber: "",
        faxNumber: "",
        creditCardNumber: ""
      }
    };
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);
  }
  _next() {
    let currentStep = this.state.currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    if (currentStep === 1) {
      const {
        name,
        dateOfBirth,
        gender,
        nationality,
        investorType,
        email,
        typeOfID,
        IDNumber,
        address,
        phoneNumber,
        faxNumber,
        creditCardNumber,
        form1Errors
      } = this.state;
      if (
        form1Valid({
          name,
          dateOfBirth,
          gender,
          nationality,
          investorType,
          email,
          typeOfID,
          IDNumber,
          address,
          phoneNumber,
          faxNumber,
          creditCardNumber,
          form1Errors
        })
      ) {const password='password'
        const isValidated = validator.createValidation({
          password,
          name,
          dateOfBirth,
          gender,
          nationality,
          investorType,
          email,
          typeOfID,
          IDNumber,
          address,
          phoneNumber,
          faxNumber,
          creditCardNumber},investorType);
          if (!isValidated.error){
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
          startDate: new Date(),
          investor: {
            name: name,
            dateOfBirth: dateOfBirth,
            gender:gender,
            nationality:nationality,
            investorType:investorType,
            email:email,
            typeOfID:typeOfID,
            IDNumber:IDNumber,
            address:address,
            phoneNumber:phoneNumber,
            faxNumber:faxNumber,
            creditCardNumber:creditCardNumber
          },
          currentStep: currentStep, // Default is Step 1
          name: null,
          dateOfBirth: new Date(),
          gender: "",
          nationality: null,
          investorType: null,
          email: null,
          typeOfID: "",
          IDNumber: "",
          address: null,
          phoneNumber: null,
          faxNumber: null,
          creditCardNumber: null,
          form1Errors: {
            name: "",
            dateOfBirth: "",
            gender: "",
            nationality: "",
            investorType: "",
            email: "",
            typeOfID: "",
            IDNumber: "",
            address: "",
            phoneNumber: "",
            faxNumber: "",
            creditCardNumber: ""
          }
        });}else{
          alert(isValidated.error.details[0].message)
        }
      } else {
        alert("Please Make Sure You Have Entered All Fields Correctly");
      }
    } else if (currentStep === 2) {
      const {
        law,
        formType,
        legalForm,
        englishName,
        phone,
        arabicName,
        capitalCurr,
        capitalVal,
        fax,
        address2,
        city,
        country,
        boardOfDirectors,
        address1,
        city1,
        country1,
        birthdate,
        gender1,
        idNum,
        name1,
        nationality1,
        position,
        typeID,
        typeInves,
        formErrors
      } = this.state;
      if (
        formValid({
          law,
          formType,
          legalForm,
          englishName,
          phone,
          arabicName,
          capitalCurr,
          capitalVal,
          fax,
          address2,
          city,
          country,
          boardOfDirectors,
          address1,
          city1,
          country1,
          birthdate,
          gender1,
          idNum,
          name1,
          nationality1,
          position,
          typeID,
          typeInves,
          formErrors
        })
      ) {
        console.log("tamam");
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
          boardCount: 0,
          law: "73",
          formType: "SPC",
          legalForm: "null",
          englishName: "",
          phone: null,
          arabicName: null,
          capitalVal: null,
          capitalCurr: "$",
          fax: "",
          address2: null,
          city: null,
          country: null,
          boardOfDirectors: [],

          address1: "",
          city1: "",
          country1: "",
          birthdate: new Date(),
          gender1: "male",
          idNum: "",
          name1: "",
          nationality1: "",
          position: "",
          typeID: "passport",
          typeInves: "individual",
          formErrors: {
            englishName: "",
            idNum: "",
            arabicName: "",
            capitalVal: "",
            nationality1: "",
            typeID: ""
          },
          startDate: new Date()
        });
      } else {
        alert("Please Make Sure You Have Entered All Fields Correctly");
      }
    } else {
    }
  }
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ city: val });
  }
  selectCountry1(val) {
    this.setState({ country1: val });
  }
  selectNationality(val) {
    let formErrors = { ...this.state.formErrors };

    formErrors.nationality1 =
      val !== "Egypt" && this.state.investor.nationality !== "EG"
        ? "Director must be Egyptian as Investor is Foreign"
        : "";
    this.setState({ formErrors, nationality1: val });
  }
  selectRegion1(val) {
    this.setState({ city1: val });
  }
  handle1DateChange(date) {
    this.setState({
      startDate: date,
      dateofbirth: date
    });
  }
  addDirector = e => {
    e.preventDefault();

    const {
      address1,
      country1,
      city1,
      birthdate,
      gender1,
      idNum,
      name1,
      nationality1,
      position,
      typeID,
      typeInves,
      boardOfDirectors
    } = this.state;
    console.log(boardOfDirectors);
    if (formValid(this.state)) {
      boardOfDirectors.push({
        address: address1 + " " + city1 + " " + country1,
        birthdate: birthdate,
        gender: gender1,
        idNum: idNum,
        name: name1,
        nationality: nationality1,
        position: position,
        typeID: typeID,
        typeInves: typeInves
      });
      this.setState({
        boardOfDirectors: boardOfDirectors
      });
    }
  };
  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }
  get previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 2) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    else{
     return  <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this.handleSubmit}
        >
          Fill Form
        </button>
    }
    // ...else render nothing
    return null;
  }
  handleDateChange(date) {
    this.setState({
      dateOfBirth: date
    });
  }
  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    let form1Errors = { ...this.state.form1Errors };
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "name":
        form1Errors.name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        form1Errors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "phoneNumber":
        form1Errors.phoneNumber =
          value.length < 11 ? "please enter valid phone number" : "";
        break;
      case "englishName":
        formErrors.englishName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "arabicName":
        formErrors.arabicName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "capitalVal":
        console.log(value > 5000);
        formErrors.capitalVal =
          parseInt(value) < 5000 || parseInt(value) > 999999999999
            ? "Capital Value must be between 5000 and 999999999999"
            : "";
        break;
      case "idNum":
        formErrors.idNum =
          value.length < 8 ? "minimum 8 characaters required" : "";
        break;
      case "nationality1":
        formErrors.nationality =
          value !== "Egypt" && this.state.investor.nationality !== "EG"
            ? "Director must be Egyptian as Investor is Foreign"
            : "";
        break;
      default:
        break;
    }
    if (name === "investorType" && value === "individual") {
      this.setState(
        {
          dateOfBirth: null,
          gender: "male",
          nationality: null,
          typeOfID: null,
          IDNumber: null,

          form1Errors,
          [name]: value,
          typeOfID: "national id"
        },
        () => console.log(this.state)
      );
      if (name === "IDNumber" && value === this.state.typeOfID) {
        form1Errors.IDNumber =
          value.length < 14 ? "please enter valid id number" : "";
      }
    } else {
      if (name === "investorType" && value === "company") {
        this.setState({
          dateOfBirth: "",
          gender: "",
          nationality: "",
          typeOfID: "",
          IDNumber: ""
        });
      }
    }
    this.setState({ form1Errors, formErrors, [name]: value }, () =>
      console.log(this.state)
    );

    /*else if(name === "typceOfID" && value === "national id"){

      console.log(this.state.IDNumber)
      this.setState({
        form1Errors,
        [name]: value,
        dateOfBirth:  new Date(getDateFromID(this.state.IDNumber)),
      }
      )
    }*/
  }

  // Trigger an alert on form submission
  handleSubmit =async event => {
    event.preventDefault();
    console.log(this.state);
    let {
      law,
      investor,
      formType,
      legalForm,
      englishName,
      phone,
      arabicName,
      capitalVal,
      capitalCurr,
      formErrors,
      fax,
      address2,
      city,
      country,
      boardOfDirectors
    } = this.state;
    let body;
    if (formType === "SSC") {
      body = {
        englishName: englishName,
        arabicName: arabicName,
        law: law,
        formType: formType,
        legalForm: legalForm,
        phone: phone,
        capitalVal: capitalVal,
        capitalCurr: capitalCurr,
        fax: fax,
        address: address2 + " " + city + " " + country,
        boardOfDirectors: boardOfDirectors,
        createdOn: new Date(),
        status: "lawyer check",
        bitIL: 1,
        comments: [],
        investor:investor 
      };
    } else {
      body = {
        englishName: englishName,
        arabicName: arabicName,
        law: law,
        formType: formType,
        legalForm: legalForm,
        phone: phone,
        capitalVal: capitalVal,
        capitalCurr: capitalCurr,
        fax: fax,
        address: address2 + " " + city + " " + country,
        createdOn: new Date(),
        status: "lawyer check",
        bitIL: 1,
        comments: [],
        investor: investor
      };
    }
    delete body.investor.password;

    console.log(body);
    if (formValid( law,
      investor,
      formType,
      legalForm,
      englishName,
      phone,
      arabicName,
      capitalVal,
      capitalCurr,
      fax,
      address2,
      formErrors,
      city,
      country,
      boardOfDirectors)) {
      const form = await axios
        .post("https://lathaleeth.herokuapp.com/api/entity_emp/lawyerfillform"+this.props.loggedUser.id, body)
        .then(result => {
          alert("Form Submitted Successfully");
          window.location.hash = "#";
        })
        .catch(error => {
          const err = Object.keys(error.response.data)[0];
          alert(error.response.data[Object.keys(error.response.data)[0]]);
        });
      console.log(form);
    } else {
      alert("Please Make Sure All Entries are Correct!");
    }
  };
  

  render() {
    const a = this.state;
    return (
      <React.Fragment>
        <h1>Walk In Form</h1>
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          <LawyerInvestorForm
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            handleDateChange={this.handleDateChange}
            name={a.name}
            dateOfBirth={a.dateOfBirth}
            gender={a.gender}
            nationality={a.nationality}
            investorType={a.investorType}
            email={a.email}
            typeOfID={a.typeOfID}
            IDNumber={a.IDNumber}
            address={a.address}
            phoneNumber={a.phoneNumber}
            faxNumber={a.faxNumber}
            creditCardNumber={a.creditCardNumber}
            form1Errors={a.form1Errors}
          />
          <LawyerForm
            handleDate1Change={this.handle1DateChange}
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            selectCountry={this.selectCountry}
            selectCountry1={this.selectCountry1}
            selectNationality={this.selectNationality}
            selectRegion={this.selectRegion}
            selectRegion1={this.selectRegion1}
            addDirector={this.addDirector}
            law={a.law}
            formType={a.formType}
            legalForm={a.legalForm}
            englishName={a.englishName}
            phone={a.phone}
            arabicName={a.arabicName}
            capitalCurr={a.capitalCurr}
            capitalVal={a.capitalVal}
            fax={a.fax}
            address2={a.address2}
            city={a.city}
            country={a.country}
            boardOfDirectors={a.boardOfDirectors}
            address1={a.address1}
            city1={a.city1}
            country1={a.country1}
            birthdate={a.birthdate}
            gender1={a.gender1}
            idNum={a.idNum}
            name1={a.name1}
            nationality1={a.nationality1}
            position={a.position}
            typeID={a.typeID}
            typeInves={a.typeInves}
            formErrors={a.formErrors}
          />
          {this.previousButton}
          {this.nextButton}
        </form>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});
export default connect(mapStateToProps)(LawyerFillForm);
