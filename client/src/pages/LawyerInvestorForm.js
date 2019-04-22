import React, { Component } from "react";
import { connect } from "react-redux";
import "./RegisterEmployee.css";
import "react-datepicker/dist/react-datepicker.css";
import { ReactDatez, ReduxReactDatez } from "react-datez";
import PropTypes from "prop-types";
import "react-datez/dist/css/react-datez.css";
import Form from "react-bootstrap/Form";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";

const axios = require("axios");

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ form1Errors, ...rest }) => {
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

class LawyerInvestorForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isEnglish) {
      const { form1Errors } = this.props;
      let individualRegister;
      if (this.props.currentStep !== 1) {
        return null;
      }
      if (this.props.investorType === "individual") {
        individualRegister = (
          <div>
            <Form.Group className="DateofBirth">
              <label htmlFor="DateofBirth">Date Of Birth</label>
              <div />
              <ReactDatez
                name="dateOfBirth"
                handleChange={this.props.handleDateChange}
                onChange={this.props.handleDateChange}
                value={this.props.dateOfBirth}
                allowFuture={false}
                allowPast={true}
              />
              {/* {form1Errors.password.length > 0 && (
              <span className="errorMessage">{form1Errors.password}</span>
            )} */}
            </Form.Group>
            <Form.Group className="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                value={this.props.gender}
                onChange={this.props.handleChange}
                name="gender"
              >
                <option value="">Select Gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="typeOfID">
              <Form.Label>ID Type:</Form.Label>
              <Form.Control
                as="select"
                value={this.props.typeOfID}
                onChange={this.props.handleChange}
                name="typeOfID"
              >
                <option value="">Select Type of ID</option>
                <option value="passport">Passport</option>
                <option value="national id">National ID</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="IDnumber">
              <label htmlFor="address">IDNumber</label>
              <input
                className={form1Errors.IDNumber.length > 0 ? "error" : null}
                placeholder="IDNumber"
                type="IDNumber"
                name="IDNumber"
                noValidate
                onChange={this.props.handleChange}
              />
              {form1Errors.IDNumber.length > 0 && (
                <span className="errorMessage">{form1Errors.IDNumber}</span>
              )}
            </Form.Group>
          </div>
        );
      }
      return (
        <div className="wrlawyerInvestorForm container">
          <div className="form-wrlawyerInvestorForm">
            <h3>Investor Details</h3>
            <Form onSubmit={this.handleSubmit} noValidate>
              <Form.Group className="investorType">
                <Form.Label>Investor Type:</Form.Label>
                <Form.Control
                  as="select"
                  value={this.props.investorType}
                  onChange={this.props.handleChange}
                  name="investorType"
                >
                  <option value="">Select Investor Type</option>
                  <option value="individual">individual</option>
                  <option value="company">company</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="name">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  className={form1Errors.name.length > 0 ? "error" : null}
                  placeholder="Name"
                  type="text"
                  name="name"
                  noValidate
                  onChange={this.props.handleChange}
                />
                {form1Errors.name.length > 0 && (
                  <span className="errorMessage">{form1Errors.name}</span>
                )}
              </Form.Group>
              <Form.Group className="email">
                <Form.Label style={{ marginLeft: "-0.85%" }} htmlFor="email">
                  Email
                </Form.Label>
                <Form.Control
                  style={{ marginLeft: "-0.85%" }}
                  className={form1Errors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.props.handleChange}
                />
                {form1Errors.email.length > 0 && (
                  <span className="errorMessage">{form1Errors.email}</span>
                )}
              </Form.Group>
              <Form.Group className="address">
                <Form.Label style={{ marginLeft: "-1.925%" }} htmlFor="address">
                  Address
                </Form.Label>
                <Form.Control
                  style={{ marginLeft: "-2%" }}
                  className={form1Errors.address.length > 0 ? "error" : null}
                  placeholder="Address"
                  type="address"
                  name="address"
                  noValidate
                  onChange={this.props.handleChange}
                />
                {form1Errors.address.length > 0 && (
                  <span className="errorMessage">{form1Errors.address}</span>
                )}
              </Form.Group>
              <Form.Group className="phoneNumber">
                <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
                <Form.Control
                  className={
                    form1Errors.phoneNumber.length > 0 ? "error" : null
                  }
                  placeholder="Phone Number"
                  type="phoneNumber"
                  name="phoneNumber"
                  noValidate
                  onChange={this.props.handleChange}
                />
                {form1Errors.phoneNumber.length > 0 && (
                  <span className="errorMessage">
                    {form1Errors.phoneNumber}
                  </span>
                )}
              </Form.Group>
              <Form.Group className="faxNumber" style={{ marginLeft: "1.5%" }}>
                <Form.Label htmlFor="faxNumber">Fax Number</Form.Label>
                <Form.Control
                  className={form1Errors.faxNumber.length > 0 ? "error" : null}
                  placeholder="Fax Number"
                  type="faxNumber"
                  name="faxNumber"
                  noValidate
                  onChange={this.props.handleChange}
                />
                {form1Errors.faxNumber.length > 0 && (
                  <span className="errorMessage">{form1Errors.faxNumber}</span>
                )}
              </Form.Group>
              <Form.Group
                className="creditCardNumber"
                style={{ marginLeft: "1.5%" }}
              >
                <Form.Label htmlFor="creditCardNumber">
                  Credit Card Number
                </Form.Label>
                <Form.Control
                  className={
                    form1Errors.creditCardNumber.length > 0 ? "error" : null
                  }
                  placeholder="Credit Card Number"
                  type="creditCardNumber"
                  name="creditCardNumber"
                  noValidate
                  onChange={this.props.handleChange}
                />
                {form1Errors.creditCardNumber.length > 0 && (
                  <span className="errorMessage">
                    {form1Errors.creditCardNumber}
                  </span>
                )}
              </Form.Group>
              <Form.Group className="nationality">
                <Form.Label>Nationality</Form.Label>
                <Form.Control
                  as="select"
                  value={this.props.nationality}
                  onChange={this.props.handleChange}
                  name="nationality"
                >
                  <option value="">Select Country</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AG">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AG">Antigua &amp; Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AA">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BL">Bonaire</option>
                  <option value="BA">Bosnia &amp; Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BR">Brazil</option>
                  <option value="BC">British Indian Ocean Ter</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="IC">Canary Islands</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CD">Channel Islands</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CI">Christmas Island</option>
                  <option value="CS">Cocos Island</option>
                  <option value="CO">Colombia</option>
                  <option value="CC">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CT">Cote D'Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CB">Curacao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="TM">East Timor</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FA">Falkland Islands</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="FS">French Southern Ter</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GB">Great Britain</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GN">Guinea</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HW">Hawaii</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IA">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IR">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="NK">Korea North</option>
                  <option value="KS">Korea South</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Laos</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macau</option>
                  <option value="MK">Macedonia</option>
                  <option value="MG">Madagascar</option>
                  <option value="MY">Malaysia</option>
                  <option value="MW">Malawi</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="ME">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="MI">Midway Islands</option>
                  <option value="MD">Moldova</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Nambia</option>
                  <option value="NU">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="AN">Netherland Antilles</option>
                  <option value="NL">Netherlands (Holland, Europe)</option>
                  <option value="NV">Nevis</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NW">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau Island</option>
                  <option value="PS">Palestine</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PO">Pitcairn Island</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="ME">Republic of Montenegro</option>
                  <option value="RS">Republic of Serbia</option>
                  <option value="RE">Reunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="NT">St Barthelemy</option>
                  <option value="EU">St Eustatius</option>
                  <option value="HE">St Helena</option>
                  <option value="KN">St Kitts-Nevis</option>
                  <option value="LC">St Lucia</option>
                  <option value="MB">St Maarten</option>
                  <option value="PM">St Pierre &amp; Miquelon</option>
                  <option value="VC">St Vincent &amp; Grenadines</option>
                  <option value="SP">Saipan</option>
                  <option value="SO">Samoa</option>
                  <option value="AS">Samoa American</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome &amp; Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="OI">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syria</option>
                  <option value="TA">Tahiti</option>
                  <option value="TW">Taiwan</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="TH">Thailand</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad &amp; Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TU">Turkmenistan</option>
                  <option value="TC">Turks &amp; Caicos Is</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States of America</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VS">Vatican City State</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="VB">Virgin Islands (Brit)</option>
                  <option value="VA">Virgin Islands (USA)</option>
                  <option value="WK">Wake Island</option>
                  <option value="WF">Wallis &amp; Futana Is</option>
                  <option value="YE">Yemen</option>
                  <option value="ZR">Zaire</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </Form.Control>
              </Form.Group>
              {individualRegister}
            </Form>
          </div>
        </div>
      );
    } else {
      const { form1Errors } = this.props;
      let individualRegister;
      if (this.props.currentStep !== 1) {
        return null;
      }
      if (this.props.investorType === "individual") {
        individualRegister = (
          <div>
            <Form.Group className="DateofBirth">
              <label htmlFor="DateofBirth">تاريخ الميلاد</label>
              <div />
              <ReactDatez
                name="dateOfBirth"
                handleChange={this.props.handleDateChange}
                onChange={this.props.handleDateChange}
                value={this.props.dateOfBirth}
                allowFuture={false}
                allowPast={true}
              />
              {/* {form1Errors.password.length > 0 && (
              <span className="errorMessage">{form1Errors.password}</span>
            )} */}
            </Form.Group>
            <Form.Group className="gender">
              <Form.Label>الجنس</Form.Label>
              <Form.Control
                as="select"
                value={this.props.gender}
                onChange={this.props.handleChange}
                name="gender"
              >
                <option value="">الجنس</option>
                <option value="female">انثة</option>
                <option value="male">ذكر</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="typeOfID">
              <Form.Label>نوع البطاقة</Form.Label>
              <Form.Control
                as="select"
                value={this.props.typeOfID}
                onChange={this.props.handleChange}
                name="typeOfID"
              >
                <option value="">اختيار نوع البطاقة</option>
                <option value="passport">جواز سفر</option>
                <option value="national id">بطاقة قومية</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="IDnumber">
              <label htmlFor="address">رقم البطاقة</label>
              <input
                className={form1Errors.IDNumber.length > 0 ? "error" : null}
                placeholder="IDNumber"
                type="IDNumber"
                name="IDNumber"
                noValidate
                onChange={this.props.handleChange}
              />
              {form1Errors.IDNumber.length > 0 && (
                <span className="errorMessage">{form1Errors.IDNumber}</span>
              )}
            </Form.Group>
          </div>
        );
      }
      return (
        <div className="wrlawyerInvestorForm container">
          <div className="form-wrlawyerInvestorForm">
            <h3>بيانات المستثمر</h3>
            <Form onSubmit={this.handleSubmit} noValidate>
              <Form.Group className="investorType">
                <Form.Label>نوع المستثمر</Form.Label>
                <Form.Control
                  as="select"
                  value={this.props.investorType}
                  onChange={this.props.handleChange}
                  name="investorType"
                >
                  <option value="">اختيار نوع المستثمر</option>
                  <option value="individual">شخص</option>
                  <option value="company">شركة</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="name">
                <Form.Label htmlFor="name">الاسم</Form.Label>
                <Form.Control
                  className={form1Errors.name.length > 0 ? "error" : null}
                  placeholder="الاسم"
                  type="text"
                  name="name"
                  noValidate
                  onChange={this.props.handleChange}
                />
                {form1Errors.name.length > 0 && (
                  <span className="errorMessage">{form1Errors.name}</span>
                )}
              </Form.Group>
              <Form.Group className="email">
                <Form.Label
                  style={{ marginLeft: "-0.85%" }}
                  htmlFor="email"
                >
                  البريد الإلكتروني
                </Form.Label>
                <Form.Control
                  style={{ marginLeft: "-0.85%" }}
                  className={
                    form1Errors.email.length > 0 ? "error" : null
                  }
                  placeholder="البريد الإلكتروني"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.props.handleChange}
                />
                {form1Errors.email.length > 0 && (
                  <span className="errorMessage">
                    {form1Errors.email}
                  </span>
                )}
              </Form.Group>
              <Form.Group className="address">
                <Form.Label
                  style={{ marginLeft: "-1.925%" }}
                  htmlFor="address"
                >
                  العنوان
                </Form.Label>
                <Form.Control
                  style={{ marginLeft: "-2%" }}
                  className={
                    form1Errors.address.length > 0 ? "error" : null
                  }
                  placeholder="العنوان"
                  type="address"
                  name="address"
                  noValidate
                  onChange={this.props.handleChange}
                />
                {form1Errors.address.length > 0 && (
                  <span className="errorMessage">
                    {form1Errors.address}
                  </span>
                )}
              </Form.Group>
              <Form.Group className="phoneNumber">
                <Form.Label htmlFor="phoneNumber">
                  رقم التيليفون
                </Form.Label>
                <Form.Control
                  className={
                    form1Errors.phoneNumber.length > 0 ? "error" : null
                  }
                  placeholder="رقم التيليفون"
                  type="phoneNumber"
                  name="phoneNumber"
                  noValidate
                  onChange={this.props.handleChange}
                />
                {form1Errors.phoneNumber.length > 0 && (
                  <span className="errorMessage">
                    {form1Errors.phoneNumber}
                  </span>
                )}
              </Form.Group>
              <Form.Group
                className="faxNumber"
                style={{ marginLeft: "1.5%" }}
              >
                <Form.Label htmlFor="faxNumber">رقم الفاكس</Form.Label>
                <Form.Control
                  className={
                    form1Errors.faxNumber.length > 0 ? "error" : null
                  }
                  placeholder="رقم الفاكس"
                  type="faxNumber"
                  name="faxNumber"
                  noValidate
                  onChange={this.props.handleChange}
                />
                {form1Errors.faxNumber.length > 0 && (
                  <span className="errorMessage">
                    {form1Errors.faxNumber}
                  </span>
                )}
              </Form.Group>
              <Form.Group
                className="creditCardNumber"
                style={{ marginLeft: "1.5%" }}
              >
                <Form.Label htmlFor="creditCardNumber">
                  رقم بطاقة بطاقة الائتمان
                </Form.Label>
                <Form.Control
                  className={
                    form1Errors.creditCardNumber.length > 0
                      ? "error"
                      : null
                  }
                  placeholder="رقم بطاقة بطاقة الائتمان"
                  type="creditCardNumber"
                  name="creditCardNumber"
                  noValidate
                  onChange={this.props.handleChange}
                />
                {form1Errors.creditCardNumber.length > 0 && (
                  <span className="errorMessage">
                    {form1Errors.creditCardNumber}
                  </span>
                )}
              </Form.Group>
              <Form.Group className="nationality">
                <Form.Label>الجنسية</Form.Label>
                <Form.Control
                  as="select"
                  value={this.props.nationality}
                  onChange={this.props.handleChange}
                  name="nationality"
                >
                  <option value="">Select Country</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AG">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AG">Antigua &amp; Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AA">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BL">Bonaire</option>
                  <option value="BA">Bosnia &amp; Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BR">Brazil</option>
                  <option value="BC">British Indian Ocean Ter</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="IC">Canary Islands</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CD">Channel Islands</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CI">Christmas Island</option>
                  <option value="CS">Cocos Island</option>
                  <option value="CO">Colombia</option>
                  <option value="CC">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CT">Cote D'Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CB">Curacao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="TM">East Timor</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FA">Falkland Islands</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="FS">French Southern Ter</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GB">Great Britain</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GN">Guinea</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HW">Hawaii</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IA">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IR">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="NK">Korea North</option>
                  <option value="KS">Korea South</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Laos</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macau</option>
                  <option value="MK">Macedonia</option>
                  <option value="MG">Madagascar</option>
                  <option value="MY">Malaysia</option>
                  <option value="MW">Malawi</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="ME">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="MI">Midway Islands</option>
                  <option value="MD">Moldova</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Nambia</option>
                  <option value="NU">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="AN">Netherland Antilles</option>
                  <option value="NL">
                    Netherlands (Holland, Europe)
                  </option>
                  <option value="NV">Nevis</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NW">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau Island</option>
                  <option value="PS">Palestine</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PO">Pitcairn Island</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="ME">Republic of Montenegro</option>
                  <option value="RS">Republic of Serbia</option>
                  <option value="RE">Reunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="NT">St Barthelemy</option>
                  <option value="EU">St Eustatius</option>
                  <option value="HE">St Helena</option>
                  <option value="KN">St Kitts-Nevis</option>
                  <option value="LC">St Lucia</option>
                  <option value="MB">St Maarten</option>
                  <option value="PM">St Pierre &amp; Miquelon</option>
                  <option value="VC">St Vincent &amp; Grenadines</option>
                  <option value="SP">Saipan</option>
                  <option value="SO">Samoa</option>
                  <option value="AS">Samoa American</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome &amp; Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="OI">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syria</option>
                  <option value="TA">Tahiti</option>
                  <option value="TW">Taiwan</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="TH">Thailand</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad &amp; Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TU">Turkmenistan</option>
                  <option value="TC">Turks &amp; Caicos Is</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States of America</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VS">Vatican City State</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="VB">Virgin Islands (Brit)</option>
                  <option value="VA">Virgin Islands (USA)</option>
                  <option value="WK">Wake Island</option>
                  <option value="WF">Wallis &amp; Futana Is</option>
                  <option value="YE">Yemen</option>
                  <option value="ZR">Zaire</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </Form.Control>
              </Form.Group>
              {individualRegister}
            </Form>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser,
  isEnglish: state.nav.isEnglish
});
export default connect(mapStateToProps)(LawyerInvestorForm);
