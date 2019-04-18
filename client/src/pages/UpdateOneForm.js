import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import "./FillForm.css";
import { refresh } from "../globalState/actions/navActions";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import { ReactDatez, ReduxReactDatez } from "react-datez";
import "react-datez/dist/css/react-datez.css";
import Form from "react-bootstrap/Form";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
const axios = require("axios");
function getSecondPart(x) {
  return x.split("/")[5];
}
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

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
class UpdateOneForm extends Component {
  state = {};

  componentDidMount = async () => {
    const x = window.location.href;
    const y = getSecondPart(x);
    const form1 = await axios.get("http://localhost:5000/api/forms/" + y);

    const {
      _id,
      law,
      formType,
      legalForm,
      englishName,
      phone,
      arabicName,
      capitalVal,
      capitalCurr,
      fax,
      createdOn,
      status,
      bitIL,
      comments,
      address,
      boardOfDirectors
    } = form1.data.data;
    const addressArray= address.split(" ");
    const city=addressArray[addressArray.length-2]
    const country = addressArray[addressArray.length - 1];


    this.setState({
      _id: _id,
      law: law,
      formType: formType,
      legalForm: legalForm,
      englishName: englishName,
      arabicName: arabicName,
      phone: phone,
      capitalVal: capitalVal,
      capitalCurr: capitalCurr,
      fax: fax,
      comments:comments,
      address: address,
      city: city,
      createdOn: createdOn,
      status: status,
      bitIL: bitIL,
      country: country,
      boardOfDirectors: boardOfDirectors
    });
  };
  constructor(props) {
    super(props);

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
      address: null,
      city: null,
      country: null,
      boardOfDirectors: [],

      address1: "",
      city1: "",
      country1: "",
      birthdate: new Date(),
      gender: "male",
      idNum: "",
      name: "",
      nationality: "",
      position: "",
      typeID: "passport",
      typeInves: "individual",
      formErrors: {
        englishName: "",
        idNum: "",
        arabicName: "",
        capitalVal: "",
        nationality: "",
        typeID: ""
      },
      startDate: new Date()
    };
    this.handleDateChange = this.handleDateChange.bind(this);
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
selectNationality(val){
    let formErrors = { ...this.state.formErrors };

  formErrors.nationality =
    val !== "Egypt" && this.state.inv.nationality !== "EG"
      ? "Director must be Egyptian as Investor is Foreign"
      : "";
      this.setState({ formErrors,nationality: val });

}
  selectRegion1(val) {
    this.setState({ city1: val });
  }
  handleDateChange(date) {
    this.setState({
      startDate: date,
      dateOfBirth: date
    });
  }
  componentWillMount = async () => {
    const formsData = await axios
      .get(
        "http://localhost:5000/api/investor/" +
          this.props.loggedUser.id
      )
      .then(res => {
        console.log(res.data.data);
        this.setState({
          inv: res.data.data
        });
      });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const user = await axios.get(
      "http://localhost:5000/api/investor/" +
        this.props.loggedUser.id,
      body
    );
    const inv = user.data.data;
    delete inv._v;
    let {
      law,
      formType,
      legalForm,
      englishName,
      phone,
      arabicName,
      capitalVal,
      capitalCurr,
      fax,
      address,
      city,
      comments,
      country,
      bitIL,
      createdOn,
      status,
      boardOfDirectors
    } = this.state;
    let body;
    console.log(comments)
    const newComments=comments.map(e=>{
       
            if(!e.hasOwnProperty("read_at")){
                e.read_at=new Date()
            }    
            return e    
        
    })
    console.log(newComments)
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
        address: address + " " + city + " " + country,
        boardOfDirectors: boardOfDirectors,
        createdOn: createdOn,
        status: status,
        bitIL: bitIL,
        comments:newComments,
        investor: { ...inv, investorFormID: inv._id }
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
        address: address + " " + city + " " + country,
        createdOn: createdOn,
        status: status,
        bitIL: bitIL,
        comments: newComments,
        investor: { ...inv, investorFormID: inv._id }
      };
    }
    delete body.investor._id;
    delete body.investor.password;
    delete body.investor.__v;

    console.log(body);
    if (formValid(this.state)) {
      const form = await axios
        .put("http://localhost:5000/api/forms/"+this.state._id, body)
        .then(result => {
          alert("Form Edited Successfully");
          this.props.refresh()
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
  addDirector = e => {
    e.preventDefault();

    const {
      address1,
      country1,
      city1,
      birthdate,
      gender,
      idNum,
      name,
      nationality,
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
        gender: gender,
        idNum: idNum,
        name: name,
        nationality: nationality,
        position: position,
        typeID: typeID,
        typeInves: typeInves
      });
      this.setState({
        boardOfDirectors: boardOfDirectors
      });
    }
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
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
      case "nationality":
        formErrors.nationality =
          value !== "Egyptian" && this.state.inv.nationality !== "Egyptian"
            ? "Director must be Egyptian as Investor is Foreign"
            : "";
        break;
      default:
        break;
    }
    if (value !== "Lawyer" && name === "emp_type") {
      this.setState(
        { formErrors, [name]: value, education: null, speciality: null },
        () => console.log(this.state)
      );
    } else {
      this.setState({ formErrors, [name]: value }, () =>
        console.log(this.state)
      );
    }
  };
  handleDateChange(date) {
    this.setState({
      startDate: date,
      dateofbirth: date
    });
  }
  render() {
    const { formErrors, country1, country, city, city1 } = this.state;

    let SPCStuff;
    if (this.state.formType === "SSC")
      SPCStuff = (
        <div>
          <h2>Adding Board of Directors</h2>
          <div className="country1">
            <label htmlFor="country">Country</label>

            <CountryDropdown
              value={country1}
              name="country1"
              onChange={val => this.selectCountry1(val)}
              style={{ display: "block" }}
            />
            <label htmlFor="city">City</label>

            <RegionDropdown
              country={country1}
              name="city1"
              value={city1}
              onChange={val => this.selectRegion1(val)}
              style={{ display: "block" }}
            />
          </div>
          <div className="address1">
            <label htmlFor="address1">Address</label>
            <input
              placeholder="Address"
              type="address1"
              name="address1"
              noValidate
              onChange={this.handleChange}
            />
          </div>
          <ReactDatez
            name="dateofbirth"
            handleChange={this.handleDateChange}
            onChange={this.handleDateChange}
            value={this.state.startDate}
            allowFuture={false}
            allowPast={true}
          />
          <div className="formType">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              value={this.state.gender}
              onChange={this.handleChange}
              name="gender"
            >
              {" "}
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </div>
          <div className="formType">
            <Form.Label>Type of ID</Form.Label>
            <Form.Control
              as="select"
              value={this.state.typeID}
              onChange={this.handleChange}
              name="typeID"
            >
              {" "}
              <option value="passport">Passport</option>
              <option value="id">ID</option>
            </Form.Control>
          </div>
          <div className="idNum">
            <label htmlFor="idNum">ID/Passport Number</label>
            <input
              className={formErrors.idNum.length > 0 ? "error" : null}
              placeholder="ID Number"
              type="text"
              name="idNum"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.idNum.length > 0 && (
              <span className="errorMessage">{formErrors.idNum}</span>
            )}
          </div>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Name"
              type="name"
              name="name"
              noValidate
              onChange={this.handleChange}
            />
          </div>
          <div className="position">
            <label htmlFor="position">Position</label>
            <input
              placeholder="Position"
              type="position"
              name="position"
              noValidate
              onChange={this.handleChange}
            />
          </div>
          <div className="nationality">
            <label htmlFor="idNum">Nationality</label>
            <CountryDropdown
              value={this.state.nationality}
              name="country1"
              onChange={val => this.selectNationality(val)}
              style={{ display: "block" }}
              className={
                formErrors.nationality.length > 0 ? "error" : null
              }
            />
            {formErrors.nationality.length > 0 && (
              <span className="errorMessage">
                {formErrors.nationality}
              </span>
            )}
          </div>
          <div className="formType">
            <Form.Label>Type of Investor</Form.Label>
            <Form.Control
              as="select"
              value={this.state.typeInves}
              onChange={this.handleChange}
              name="typeInves"
            >
              {" "}
              <option value="individual">Individual</option>
              <option value="company">Company</option>
            </Form.Control>
          </div>
          <div>
            <button onClick={this.addDirector.bind(this)}>
              Add Director
            </button>
          </div>
        </div>
      );

    return (
      <div className="wrFillFormser">
        <div className="form-wrFillFormser">
          <h1>Create New Company</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="englishName">
              <label htmlFor="englishName">English Name</label>
              <input
                className={
                  formErrors.englishName.length > 0 ? "error" : null
                }
                value={this.state.englishName}
                placeholder="English Name"
                type="text"
                name="englishName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.englishName.length > 0 && (
                <span className="errorMessage">
                  {formErrors.englishName}
                </span>
              )}
            </div>
            <div className="arabicName">
              <label htmlFor="arabicName">Arabic Name</label>
              <input
                className={
                  formErrors.arabicName.length > 0 ? "error" : null
                }
                placeholder="Arabic Name"
                type="text"
                value={this.state.arabicName}
                name="arabicName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.arabicName.length > 0 && (
                <span className="errorMessage">
                  {formErrors.arabicName}
                </span>
              )}
            </div>
            <div className="fax">
              <label htmlFor="fax">Fax Number</label>
              <input
                placeholder="Fax"
                type="text"
                value={this.state.fax}
                name="fax"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">Telephone Number</label>
              <input
              value={this.state.phone}
                placeholder=""
                type="text"
                name="phone"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="capitalVal">
              <label htmlFor="capitalVal">Capital Value</label>
              <input
                className={
                  formErrors.capitalVal.length > 0 ? "error" : null
                }
                value={this.state.capitalVal}
                placeholder="Capital Value"
                type="text"
                name="capitalVal"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.capitalVal.length > 0 && (
                <span className="errorMessage">
                  {formErrors.capitalVal}
                </span>
              )}
            </div>
            <div className="country">
              <label htmlFor="country">Country</label>

              <CountryDropdown
                value={this.state.country}
                name="country"
                onChange={val => this.selectCountry(val)}
                style={{ display: "block" }}
              />
              <label htmlFor="city">City</label>

              <RegionDropdown
                country={country}
                name="city"
                value={this.state.city}
                onChange={val => this.selectRegion(val)}
                style={{ display: "block" }}
              />
            </div>
            <div className="address">
              <label htmlFor="address">Address</label>
              <input
                placeholder="Address"
                type="address"
                name="address"
                value={this.state.address}
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="formType">
              <Form.Label>Capital Currency</Form.Label>
              <Form.Control
                as="select"
                value={this.state.capitalCurr}
                onChange={this.handleChange}
                name="capitalCurr"
              >
                <option value="$">$</option>
                <option value="CA$">CA$</option>
                <option value="€">€</option>
                <option value="AED">AED</option>
                <option value="EGP">EGP</option>
                <option value="£">£</option>
                <option value="SR">SR</option>
              </Form.Control>
            </div>
            <div className="formType">
              <Form.Label>Law</Form.Label>
              <Form.Control
                as="select"
                value={this.state.law}
                onChange={this.handleChange}
                name="law"
              >
                {" "}
                <option value="73">73</option>
                <option value="152">152</option>
              </Form.Control>
            </div>
            <div className="formType">
              <Form.Label>Form Type:</Form.Label>
              <Form.Control
                as="select"
                value={this.state.formType}
                onChange={this.handleChange}
                name="formType"
              >
                {" "}
                <option value="SPC">SPC</option>
                <option value="SSC">SSC</option>
              </Form.Control>
            </div>
            {SPCStuff}
            <div className="createForm">
              <button type="submit">Edit Form</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
UpdateOneForm.propTypes = {
  refresh: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser,
  refresh: state.nav.refresh
});
export default connect(
  mapStateToProps,
  { refresh }
)(UpdateOneForm);