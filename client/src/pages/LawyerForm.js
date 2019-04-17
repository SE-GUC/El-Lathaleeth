import React, { Component } from "react";
import { connect } from "react-redux";
import "./LawyerForm.css";
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
class LawyerForms extends Component {
  constructor(props) {
    super(props);
  }
  //   handleSubmit = async e => {
  //     e.preventDefault();
  //     const user = await axios.get(
  //       "https://lathaleeth.herokuapp.com/api/investor/" +
  //         this.props.loggedUser.id,
  //       body
  //     );
  //     const inv = user.data.data;
  //     delete inv._v;
  //     let {
  //       law,
  //       formType,
  //       legalForm,
  //       englishName,
  //       phone,
  //       arabicName,
  //       capitalVal,
  //       capitalCurr,
  //       fax,
  //       address2,
  //       city,
  //       country,
  //       boardOfDirectors
  //     } = this.props;
  //     let body;
  //     if (formType === "SSC") {
  //       body = {
  //         englishName: englishName,
  //         arabicName: arabicName,
  //         law: law,
  //         formType: formType,
  //         legalForm: legalForm,
  //         phone: phone,
  //         capitalVal: capitalVal,
  //         capitalCurr: capitalCurr,
  //         fax: fax,
  //         address2: address2 + " " + city + " " + country,
  //         boardOfDirectors: boardOfDirectors,
  //         createdOn: new Date(),
  //         status: "posted",
  //         bitIL: 0,
  //         comments: [],
  //         investor: { ...inv, investorFormID: inv._id }
  //       };
  //     } else {
  //       body = {
  //         englishName: englishName,
  //         arabicName: arabicName,
  //         law: law,
  //         formType: formType,
  //         legalForm: legalForm,
  //         phone: phone,
  //         capitalVal: capitalVal,
  //         capitalCurr: capitalCurr,
  //         fax: fax,
  //         address2: address2 + " " + city + " " + country,
  //         createdOn: new Date(),
  //         status: "posted",
  //         bitIL: 0,
  //         comments: [],
  //         investor: { ...inv, investorFormID: inv._id }
  //       };
  //     }
  //     delete body.investor._id;
  //     delete body.investor.password;
  //     delete body.investor.__v;

  //     console.log(body);
  //     if (formValid(this.props)) {
  //       const form = await axios
  //         .post("https://lathaleeth.herokuapp.com/api/forms/", body)
  //         .then(result => {
  //           alert("Form Submitted Successfully");
  //           window.location.hash = "#";
  //         })
  //         .catch(error => {
  //           const err = Object.keys(error.response.data)[0];
  //           alert(error.response.data[Object.keys(error.response.data)[0]]);
  //         });
  //       console.log(form);
  //     } else {
  //       alert("Please Make Sure All Entries are Correct!");
  //     }
  //   };
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    const { formErrors, country1, country, city, city1 } = this.props;

    let SPCStuff;
    if (this.props.formType === "SSC")
      SPCStuff = (
        <div>
          <h2>Adding Board of Directors</h2>
          <div className="country1">
            <label htmlFor="country">Country</label>

            <CountryDropdown
              value={country1}
              name="country1"
              onChange={val => this.props.selectCountry1(val)}
              style={{ display: "block" }}
            />
            <label htmlFor="city">City</label>

            <RegionDropdown
              country={country1}
              name="city1"
              value={city1}
              onChange={val => this.props.selectRegion1(val)}
              style={{ display: "block" }}
            />
          </div>
          <div className="address1">
            <label htmlFor="address1">Address</label>
            <input
              placeholder="address"
              type="address1"
              name="address1"
              noValidate
              onChange={this.props.handleChange}
            />
          </div>
          <ReactDatez
            name="dateofbirth"
            handleChange={this.props.handle1DateChange}
            onChange={this.props.handle1DateChange}
            value={this.props.startDate}
            allowFuture={false}
            allowPast={true}
          />
          <div className="formType">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              value={this.props.gender}
              onChange={this.props.handleChange}
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
              value={this.props.typeID}
              onChange={this.props.handleChange}
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
              onChange={this.props.handleChange}
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
              name="name1"
              noValidate
              onChange={this.props.handleChange}
            />
          </div>
          <div className="position">
            <label htmlFor="position">Position</label>
            <input
              placeholder="Position"
              type="position"
              name="position"
              noValidate
              onChange={this.props.handleChange}
            />
          </div>
          <div className="nationality">
            <label htmlFor="idNum">Nationality</label>
            <CountryDropdown
              value={this.props.nationality1}
              name="nationality1"
              onChange={val => this.props.selectNationality(val)}
              style={{ display: "block" }}
              className={formErrors.nationality1.length > 0 ? "error" : null}
            />
            {formErrors.nationality1.length > 0 && (
              <span className="errorMessage">{formErrors.nationality1}</span>
            )}
          </div>
          <div className="formType">
            <Form.Label>Type of Investor</Form.Label>
            <Form.Control
              as="select"
              value={this.props.typeInves}
              onChange={this.props.handleChange}
              name="typeInves"
            >
              {" "}
              <option value="individual">Individual</option>
              <option value="company">Company</option>
            </Form.Control>
          </div>
          <div>
            <button onClick={this.props.addDirector.bind(this)}>
              Add Director
            </button>
          </div>
        </div>
      );

    return (
      <div className="wrLawyerFormser">
        <div className="form-wrLawyerFormser">
          <h1>Create New Company</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="englishName">
              <label htmlFor="englishName">English Name</label>
              <input
                className={formErrors.englishName.length > 0 ? "error" : null}
                placeholder="English Name"
                type="text"
                name="englishName"
                noValidate
                onChange={this.props.handleChange}
              />
              {formErrors.englishName.length > 0 && (
                <span className="errorMessage">{formErrors.englishName}</span>
              )}
            </div>
            <div className="arabicName">
              <label htmlFor="arabicName">Arabic Name</label>
              <input
                className={formErrors.arabicName.length > 0 ? "error" : null}
                placeholder="Arabic Name"
                type="text"
                name="arabicName"
                noValidate
                onChange={this.props.handleChange}
              />
              {formErrors.arabicName.length > 0 && (
                <span className="errorMessage">{formErrors.arabicName}</span>
              )}
            </div>
            <div className="fax">
              <label htmlFor="fax">Fax Number</label>
              <input
                placeholder="Fax"
                type="text"
                name="fax"
                noValidate
                onChange={this.props.handleChange}
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">Telephone Number</label>
              <input
                placeholder=""
                type="text"
                name="phone"
                noValidate
                onChange={this.props.handleChange}
              />
            </div>
            <div className="capitalVal">
              <label htmlFor="capitalVal">Capital Value</label>
              <input
                className={formErrors.capitalVal.length > 0 ? "error" : null}
                placeholder="Capital Value"
                type="text"
                name="capitalVal"
                noValidate
                onChange={this.props.handleChange}
              />
              {formErrors.capitalVal.length > 0 && (
                <span className="errorMessage">{formErrors.capitalVal}</span>
              )}
            </div>
            <div className="country">
              <label htmlFor="country">Country</label>

              <CountryDropdown
                value={country}
                name="country"
                onChange={val => this.props.selectCountry(val)}
                style={{ display: "block" }}
              />
              <label htmlFor="city">City</label>

              <RegionDropdown
                country={country}
                name="city"
                value={city}
                onChange={val => this.props.selectRegion(val)}
                style={{ display: "block" }}
              />
            </div>
            <div className="address">
              <label htmlFor="address2">address</label>
              <input
                placeholder="address"
                type="address2"
                name="address2"
                noValidate
                onChange={this.props.handleChange}
              />
            </div>
            <div className="formType">
              <Form.Label>Capital Currency</Form.Label>
              <Form.Control
                as="select"
                value={this.props.capitalCurr}
                onChange={this.props.handleChange}
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
                value={this.props.law}
                onChange={this.props.handleChange}
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
                value={this.props.formType}
                onChange={this.props.handleChange}
                name="formType"
              >
                {" "}
                <option value="SPC">SPC</option>
                <option value="SSC">SSC</option>
              </Form.Control>
            </div>
            {SPCStuff}
            <div className="createForm">
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});
export default connect(mapStateToProps)(LawyerForms);
