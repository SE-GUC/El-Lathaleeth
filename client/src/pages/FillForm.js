import React, { Component } from "react";
import { connect } from "react-redux";
import "./FillForms.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactDatez, ReduxReactDatez } from "react-datez";
import "react-datez/dist/css/react-datez.css";
import Form from "react-bootstrap/Form";
const axios = require("axios");

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  delete rest.speciality;
  delete rest.education;
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

class FillForms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      englishName: null,
      formErrors: {
        englishName: "",
        arabicName: "",
        lastName: "",
        email: "",
        password: "",
        username: "",
        speciality: "",
        education: ""
      },
      startDate: new Date(),
      emp_type: "Admin"
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  handleDateChange(date) {
    this.setState({
      startDate: date,
      dateOfBirth: date
    });
  }
  handleSubmit = async e => {
    e.preventDefault();
    const user = await axios.get(
      "http://localhost:5000/api/investor/" + this.props.loggedUser.id,
      body
    );

    let {
      englishName,
      arabicName,
      lastName,
      dateOfBirth,
      password,
      email,
      education,
      speciality,
      username,
      emp_type
    } = this.state;
    let body = {
      englishName: englishName,
      arabicName: arabicName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      password: password,
      email: email,
      username: username,
      joined_on: new Date(),
      emp_type: emp_type,
      lawyer_details: {
        pending_forms: [],
        reviewed_forms: [],
        filled_forms: [],
        speciality: speciality,
        education: education
      },
      admin_details: {
        registered_employees: []
      },
      reviewer_details: {
        pending_forms: [],
        reviewed_forms: []
      }
    };
    console.log(body);
    if (formValid(this.state)) {
      const form = await axios
        .post(
          "http://localhost:5000/api/forms/",
          body
        )
        .then(result => {
          alert("Form Submitted Successfully");
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
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "username":
        formErrors.username =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
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

  render() {
    const { formErrors } = this.state;
    let lawyerStuff;
    let lawyerStuff1;

    if (this.state.emp_type === "Lawyer") {
      lawyerStuff = (
        <div className="speciality">
          <label htmlFor="speciality">Speciality</label>
          <input
            className={formErrors.speciality.length > 0 ? "error" : null}
            placeholder="Speciality"
            type="text"
            name="speciality"
            noValidate
            onChange={this.handleChange}
          />
          {formErrors.speciality.length > 0 && (
            <span className="errorMessage">{formErrors.speciality}</span>
          )}
        </div>
      );
      lawyerStuff1 = (
        <div className="education">
          <label htmlFor="education">Education:</label>
          <input
            className={formErrors.education.length > 0 ? "error" : null}
            placeholder="Education"
            type="text"
            name="education"
            noValidate
            onChange={this.handleChange}
          />
          {formErrors.education.length > 0 && (
            <span className="errorMessage">{formErrors.education}</span>
          )}
        </div>
      );
    }

    return (
      <div className="wrFillFormser">
        <div className="form-wrFillFormser">
          <h1>Register New Employee</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="englishName">
              <label htmlFor="englishName">First Name</label>
              <input
                className={formErrors.englishName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="englishName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.englishName.length > 0 && (
                <span className="errorMessage">{formErrors.englishName}</span>
              )}
            </div>
            <div className="arabicName">
              <label htmlFor="arabicName">Middle Name</label>
              <input
                className={formErrors.arabicName.length > 0 ? "error" : null}
                placeholder="Middle Name"
                type="text"
                name="arabicName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.arabicName.length > 0 && (
                <span className="errorMessage">{formErrors.arabicName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="username">
              <label htmlFor="username">Username:</label>
              <input
                className={formErrors.username.length > 0 ? "error" : null}
                placeholder="username"
                type="text"
                name="username"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            <div className="DateofBirth">
              <label htmlFor="DateofBirth">Date Of Birth</label>
              <div />
              <ReactDatez
                name="dateOfBirth"
                handleChange={this.handleDateChange}
                onChange={this.handleDateChange}
                value={this.state.startDate}
                allowFuture={false}
                allowPast={true}
              />
              {/* {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )} */}
            </div>
            <div className="Emp_type">
              <Form.Label>Employee Type:</Form.Label>
              <Form.Control
                as="select"
                value={this.state.emp_type}
                onChange={this.handleChange}
                name="emp_type"
              >
                <option value="Admin">Admin</option>
                <option value="Lawyer">Lawyer</option>
                <option value="Reviewer">Reviewer</option>
              </Form.Control>
            </div>
            {/* <p>{"\n"}</p> */}
            {lawyerStuff}
            {lawyerStuff1}
            <div className="createAccount">
              <button type="submit">Register New Employee</button>
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
export default connect(mapStateToProps)(FillForms);
