import React, { Component } from "react";
import { connect } from "react-redux";
import Center from "react-center";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../vip.css";
import Form from "react-bootstrap/Form";
const axios = require("axios");

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

class UpdateInvestorProfile extends Component {
  state = {
    investor: [],
    formErrors: {
      firstName: "",
      middleName: "",
      lastName: "",
      name: "",
      email: "",
      password: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      investorType: "",
      typeOfID: "",
      IDNumber: "",
      address: "",
      phoneNumber: "",
      faxNumber: "",
      creditCardNumber: "",
      capital: "",
      capitalCurrency: ""
    }
  };

  onChangeInput = e => {
    e.preventDefault();
    const { name, value } = e.target;

    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name =
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
      case "phoneNumber":
        formErrors.phoneNumber =
          value.length < 11 ? "11 characaters required" : "";
        break;
      case "creditCardNumber":
        formErrors.creditCardNumber =
          value.length < 16 ? "16 characaters required" : "";
        break;
      default:
        break;
    }
    try {
      this.setState(
        { formErrors, investor: { ...this.state.investor, [name]: value } },
        () => console.log(this.state)
      );
    } catch (e) {}
  };
  //this.setState({[e.target.name]: e.target.value})

  submit = async e => {
    e.preventDefault();
    console.log(this.state.investor.address);
    let {
      name,
      email,
      dateOfBirth,
      gender,
      nationality,
      investorType,
      typeOfID,
      IDNumber,
      address,
      phoneNumber,
      faxNumber,
      creditCardNumber,
      password
    } = this.state.investor;

    let body = {
      name: name,
      email: email,
      dateOfBirth: dateOfBirth,
      gender: gender,
      nationality: nationality,
      investorType: investorType,
      typeOfID: typeOfID,
      IDNumber: IDNumber,
      address: address,
      phoneNumber: phoneNumber,
      faxNumber: faxNumber,
      creditCardNumber: creditCardNumber,
      password: password
    };

    console.log(body);

    if (formValid(this.state)) {
      const investor = await axios
        .put(
          "https://lathaleeth.herokuapp.com/api/investor/5cafca0b96a4844b0864c9fe",
          body
        )
        .then(result => {
          alert("Profile successfully updated");
        })
        .catch(error => {
          console.log(this.state);
          const err = Object.keys(error.response.data)[0];
          alert(error.response.data[Object.keys(error.response.data)[0]]);
        });
      //console.log(investor);
      //alert("Your Profile has been successfully edited!");
    } else {
      console.log(this.state);
      alert("Please make sure all fields are entered correctly!");
    }
  };

  componentDidMount = async () => {
    console.log(this.props.loggedUser);
    await axios
      .get("https://lathaleeth.herokuapp.com/api/investor/" + this.props.loggedUser.id)
      .then(result => {
        console.log(result.data.data);
        this.setState({ investor: result.data.data });
      });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div>
        <form onSubmit={this.submit} noValidate>
          <div class="card">
            <div class="card-body">
              {this.props.isEnglish && <h4 class="card-title">My Profile</h4>}
              {!this.props.isEnglish && <h4 class="card-title">صفحتي</h4>}
              <div class="card-text">
                <div className="form-group">
                  {this.props.isEnglish && <Form.Label>Type:</Form.Label>}
                  {!this.props.isEnglish && (
                    <Form.Label>:نوع المستثمر</Form.Label>
                  )}
                  <Form.Control
                    as="select"
                    className={
                      formErrors.investorType.length > 0 ? "error" : null
                    }
                    //className="form-control"
                    name="investorType"
                    defaultValue={this.state.investor.investorType}
                    onChange={this.onChangeInput}
                  >
                    <option value="individual">individual</option>
                    <option value="company">company</option>
                  </Form.Control>
                </div>
                {/* <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input type="text" 
                        className={formErrors.firstName.length > 0 ? "error" : null}
                        //className="form-control"
                        name="firstName" 
                        noValidate
                        defaultValue={this.state.investor.name}
                        onChange={this.onChangeInput}
                        />
                        {formErrors.firstName.length > 0 && (
                        <span className="errorMessage">{formErrors.firstName}</span>
                        )}
                   </div> */}
                {/* <div className="form-group">
                        <label htmlFor="">Middle Name</label>
                        <input type="text" 
                        className={formErrors.middleName.length > 0 ? "error" : null}
                        //className="form-control"
                        name="middleName" 
                        noValidate
                        defaultValue={this.state.investor.middleName}
                        onChange={this.onChangeInput}
                        />
                   </div>  */}
                <div className="form-group">
                  {this.props.isEnglish && <label htmlFor="">Name</label>}
                  {!this.props.isEnglish && <label htmlFor="">: الاسم</label>}
                  <input
                    type="text"
                    className={formErrors.name.length > 0 ? "error" : null}
                    //className="form-control"
                    name="name"
                    noValidate
                    defaultValue={this.state.investor.name}
                    onChange={this.onChangeInput}
                  />
                  {formErrors.name.length > 0 && (
                    <span className="errorMessage">{formErrors.name}</span>
                  )}
                </div>
                {this.props.isEnglish && (
                  <div className="form-group">
                    <Form.Label>Gender:</Form.Label>
                    <Form.Control
                      as="select"
                      className={formErrors.gender.length > 0 ? "error" : null}
                      //className="form-control"
                      name="gender"
                      defaultValue={this.state.investor.gender}
                      onChange={this.onChangeInput}
                    >
                      <option value="male">male</option>
                      <option value="female">female</option>
                    </Form.Control>
                  </div>
                )}
                {!this.props.isEnglish && (
                  <div className="form-group">
                    <Form.Label>: النوع</Form.Label>}
                    <Form.Control
                      as="select"
                      className={formErrors.gender.length > 0 ? "error" : null}
                      //className="form-control"
                      name="gender"
                      defaultValue={this.state.investor.gender}
                      onChange={this.onChangeInput}
                    >
                      <option value="male">ذكر</option>
                      <option value="female">أنثى</option>
                    </Form.Control>
                  </div>
                )}
                <div className="form-group">
                  {this.props.isEnglish && <label htmlFor="">Email</label>}
                  {!this.props.isEnglish && (
                    <label htmlFor="">:البريد الإلكتروني</label>
                  )}
                  <input
                    type="text"
                    className={formErrors.email.length > 0 ? "error" : null}
                    //className="form-control"
                    name="email"
                    noValidate
                    defaultValue={this.state.investor.email}
                    onChange={this.onChangeInput}
                  />
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  {this.props.isEnglish && <label htmlFor="">Password</label>}
                  {!this.props.isEnglish && <label htmlFor="">كلمه السر</label>}
                  <input
                    type="text"
                    className={formErrors.password.length > 0 ? "error" : null}
                    //className="form-control"
                    name="password"
                    noValidate
                    //defaultValue={this.state.investor.password}
                    value=""
                    onChange={this.onChangeInput}
                  />
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                </div>
                <div className="form-group">
                  {this.props.isEnglish && (
                    <label htmlFor="">Nationality</label>
                  )}
                  {!this.props.isEnglish && <label htmlFor="">: الجنسية</label>}
                  <input
                    type="text"
                    className={
                      formErrors.nationality.length > 0 ? "error" : null
                    }
                    //className="form-control"
                    name="nationality"
                    noValidate
                    defaultValue={this.state.investor.nationality}
                    onChange={this.onChangeInput}
                  />
                  {formErrors.nationality.length > 0 && (
                    <span className="errorMessage">
                      {formErrors.nationality}
                    </span>
                  )}
                </div>
                {this.props.isEnglish && (
                  <div className="form-group">
                    <Form.Label>ID Type:</Form.Label>
                    <Form.Control
                      as="select"
                      className={
                        formErrors.typeOfID.length > 0 ? "error" : null
                      }
                      //className="form-control"
                      name="typeOfID"
                      defaultValue={this.state.investor.typeOfID}
                      onChange={this.onChangeInput}
                    >
                      <option value="passport">passport</option>
                      <option value="id">id</option>
                    </Form.Control>
                  </div>
                )}
                {!this.props.isEnglish && (
                  <div className="form-group">
                    <Form.Label>: نوع رقم الهوية</Form.Label>
                    <Form.Control
                      as="select"
                      className={
                        formErrors.typeOfID.length > 0 ? "error" : null
                      }
                      //className="form-control"
                      name="typeOfID"
                      defaultValue={this.state.investor.typeOfID}
                      onChange={this.onChangeInput}
                    >
                      <option value="passport">جواز سفر</option>
                      <option value="id">بطاقة</option>
                    </Form.Control>
                  </div>
                )}
                <div className="form-group">
                  {this.props.isEnglish && <label htmlFor="">ID Number</label>}
                  {!this.props.isEnglish && (
                    <label htmlFor="">:رقم الهوية</label>
                  )}
                  <input
                    type="text"
                    className={formErrors.IDNumber.length > 0 ? "error" : null}
                    //className="form-control"
                    name="IDNumber"
                    noValidate
                    defaultValue={this.state.investor.IDNumber}
                    onChange={this.onChangeInput}
                  />
                  {formErrors.IDNumber.length > 0 && (
                    <span className="errorMessage">{formErrors.IDNumber}</span>
                  )}
                </div>
                <div className="form-group">
                  {this.props.isEnglish && (
                    <label htmlFor="">Date Of Birth (Format: YYYY-MM-DD)</label>
                  )}
                  {!this.props.isEnglish && (
                    <label htmlFor="">(YYYY-MM-DD): تاريخ الميلاد </label>
                  )}
                  <input
                    type="text"
                    className={
                      formErrors.dateOfBirth.length > 0 ? "error" : null
                    }
                    //className="form-control"
                    name="dateOfBirth"
                    defaultValue={this.state.investor.dateOfBirth}
                    onChange={this.onChangeInput}
                  />
                  {formErrors.dateOfBirth.length > 0 && (
                    <span className="errorMessage">
                      {formErrors.dateOfBirth}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  {this.props.isEnglish && <label htmlFor="">Address</label>}
                  {!this.props.isEnglish && <label htmlFor="">: العنوان</label>}
                  <input
                    type="text"
                    className={formErrors.address.length > 0 ? "error" : null}
                    //className="form-control"
                    name="address"
                    noValidate
                    defaultValue={this.state.investor.address}
                    onChange={this.onChangeInput}
                  />
                  {formErrors.address.length > 0 && (
                    <span className="errorMessage">{formErrors.address}</span>
                  )}
                </div>
                <div className="form-group">
                  {this.props.isEnglish && (
                    <label htmlFor="">Phone Number</label>
                  )}
                  {!this.props.isEnglish && (
                    <label htmlFor="">:رقم الهاتف</label>
                  )}
                  <input
                    type="text"
                    className={
                      formErrors.phoneNumber.length > 0 ? "error" : null
                    }
                    //className="form-control"
                    name="phoneNumber"
                    defaultValue={this.state.investor.phoneNumber}
                    onChange={this.onChangeInput}
                  />
                  {formErrors.phoneNumber.length > 0 && (
                    <span className="errorMessage">
                      {formErrors.phoneNumber}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  {this.props.isEnglish && <label htmlFor="">Fax Number</label>}
                  {!this.props.isEnglish && (
                    <label htmlFor="">:رقم الفاكس</label>
                  )}
                  <input
                    type="text"
                    className={formErrors.faxNumber.length > 0 ? "error" : null}
                    //className="form-control"
                    name="faxNumber"
                    noValidate
                    defaultValue={this.state.investor.faxNumber}
                    onChange={this.onChangeInput}
                  />
                  {formErrors.faxNumber.length > 0 && (
                    <span className="errorMessage">{formErrors.faxNumber}</span>
                  )}
                </div>
                <div className="form-group">
                  {this.props.isEnglish && (
                    <label htmlFor="">Credit Card</label>
                  )}
                  {!this.props.isEnglish && (
                    <label htmlFor="">:بطاقة الائتمان</label>
                  )}
                  <input
                    type="text"
                    className={
                      formErrors.creditCardNumber.length > 0 ? "error" : null
                    }
                    //className="form-control"
                    name="creditCardNumber"
                    noValidate
                    defaultValue={this.state.investor.creditCardNumber}
                    onChange={this.onChangeInput}
                  />
                  {formErrors.creditCardNumber.length > 0 && (
                    <span className="errorMessage">
                      {formErrors.creditCardNumber}
                    </span>
                  )}
                </div>
                <button className="btn btn-success btn-block">
                  {this.props.isEnglish && <p>Edit Profile</p>}
                  {!this.props.isEnglish && <p>تعديل </p>}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser,
  isEnglish: state.nav.isEnglish
});

export default connect(mapStateToProps)(UpdateInvestorProfile);
