import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "../vip.css";
const axios = require("axios");

const NewNav = props => {
  const { title } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success">
      <a className="navbar-brand" href="#">
        {title}
      </a>
    </nav>
  );
};

class ViewInvestorProfile extends Component {
  state = { investor: [] };

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
    return (
      <div class="card">
        {this.props.isEnglish && <NewNav title="My Profile" />}
        {!this.props.isEnglish && <NewNav className= "float-right" title="صفحتي" />}
        <div class="card-body">
          <h3 class="card-title">
            {this.state.investor.name}
            <Link to={"/UpdateInvestorProfile"}>
              <i
                className="fa fa-pencil"
                style={{
                  color: "orange",
                  float: "right",
                  cursor: "pointer",
                  marginLeft: "8px"
                }}
              />
            </Link>
          </h3>
          <p class="card-text">
            {this.props.isEnglish && (
              <ul class="list-group">
                <li class="list-group-item">
                  Type: {this.state.investor.investorType}
                </li>
                {this.state.investor.gender && (
                  <li class="list-group-item">
                    Gender: {this.state.investor.gender}
                  </li>
                )}
                <li class="list-group-item">
                  Nationality: {this.state.investor.nationality}
                </li>
                {this.state.investor.typeOfID && (
                  <li class="list-group-item">
                    ID Type: {this.state.investor.typeOfID}
                  </li>
                )}
                {this.state.investor.IDNumber && (
                  <li class="list-group-item">
                    ID Num: {this.state.investor.IDNumber}
                  </li>
                )}
                {this.state.investor.dateOfBirth && (
                  <li class="list-group-item">
                    DOB: {this.state.investor.dateOfBirth}
                  </li>
                )}
                <li class="list-group-item">
                  Address: {this.state.investor.address}
                </li>
                <li class="list-group-item">
                  Phone: {this.state.investor.phoneNumber}
                </li>
                <li class="list-group-item">
                  Fax: {this.state.investor.faxNumber}
                </li>
                <li class="list-group-item">
                  Credit Card: {this.state.investor.creditCardNumber}
                </li>
                <li class="list-group-item">
                  Email: {this.state.investor.email}
                </li>
              </ul>
            )}
            {!this.props.isEnglish && (
              <ul class="list-group right full-width">
                <li class="list-group-item">
                  {" "}
                  {this.state.investor.investorType} :نوع المستثمر
                </li>
                {this.state.investor.gender && (
                  <li class="list-group-item">
                    {" "}
                    {this.state.investor.gender}: النوع
                  </li>
                )}
                <li class="list-group-item">
                  {" "}
                  {this.state.investor.nationality}: الجنسية
                </li>
                {this.state.investor.typeOfID && (
                  <li class="list-group-item">
                    {" "}
                    {this.state.investor.typeOfID}: نوع رقم الهوية
                  </li>
                )}
                {this.state.investor.IDNumber && (
                  <li class="list-group-item">
                    {" "}
                    {this.state.investor.IDNumber} :رقم الهوية
                  </li>
                )}
                {this.state.investor.dateOfBirth && (
                  <li class="list-group-item">
                    {" "}
                    {this.state.investor.dateOfBirth} : تاريخ الميلاد{" "}
                  </li>
                )}
                <li class="list-group-item">
                  {" "}
                  {this.state.investor.address}: العنوان
                </li>
                <li class="list-group-item">
                  {" "}
                  {this.state.investor.phoneNumber}:رقم الهاتف
                </li>
                <li class="list-group-item">
                  {" "}
                  {this.state.investor.faxNumber}:رقم الفاكس
                </li>
                <li class="list-group-item">
                  {" "}
                  {this.state.investor.creditCardNumber}:بطاقة الائتمان
                </li>
                <li class="list-group-item">
                  {this.state.investor.email}:البريد الإلكتروني
                </li>
              </ul>
            )}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser,
  isEnglish: state.nav.isEnglish
});

export default connect(mapStateToProps)(ViewInvestorProfile);
