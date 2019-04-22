import React, { Component } from "react";
import Center from 'react-center';
import { connect } from "react-redux";
import { login } from "../../globalState/actions/authActions";
import PropTypes from "prop-types";
import axios from "axios";
import Form from "react-bootstrap/Form";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  login =async () => {
    // try{
      try{
        await	axios.post(
            "http://localhost:5000/api/entity_emp/login",
            {
              username: this.state.email,
              password: this.state.password
            }
          );
await  this.props.login({
      username: this.state.email,
      password: this.state.password
    })
          

      }catch(e){
        try{
       await   axios.post(
            "http://localhost:5000/api/investor/login",
            {
              email: this.state.email,
              password: this.state.password
            }
          );
          await  this.props.login({
      username: this.state.email,
      password: this.state.password
    })
          

        }
        catch(m){
    alert("Please Check Fields")}

        }
      
      }
      

// }
    // catch(e){
// alert("Check Fields")
    // }

  ;
  handleSubmit = e => {
    e.preventDefault();
    this.login();
    // const login = axios
    //   .put("http://localhost:5000/api/entity_emp/login", {
    //     username: this.state.username,
    //     password: this.state.password
    //   })
    //   .then(result => {
    //   })
    //   .catch(error => {
    //     const invlogin = axios.put(
    //       "http://localhost:5000/api/investor/login",
    //       {
    //         email: this.state.email,
    //         password: this.state.password
    //       }
    //     );
    //      const err = Object.keys(error.response.data)[0];
    //      alert(error.response.data[Object.keys(error.response.data)[0]]);
    // });;

   
  };
  render() {
    if(this.props.isEnglish){
    let test
    if (this.props.loggedUser.type === "investor") {
      test = <div>Investor Signed In</div>;
      window.location.hash = "/InvestorPage";
    } else if ((this.props.loggedUser.type === "Lawyer")||(this.props.loggedUser.type === "Reviewer")) {
      test = <div>Employee Signed In</div>;
      window.location.hash = "/lawyer_workspace";
    }
    else if(this.props.loggedUser.type==='Reviewer'){
            window.location.hash = "/";

    }
    else if(this.props.loggedUser.type==='Admin'){
 window.location.hash = "/";
    }
    return (
      <Center >
        <div className =  "col-md-3 col-md-offset-6">
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="container center padding-70">
            <h3 className="grey-text text-darken-3" style={{lineHeight:4}} >Sign In</h3>
            <div className="container">
              <div className="input-field">
                <label htmlFor="email">Email or Username</label>
                <input type="text" id="email" onChange={this.handleChange} />
              </div>
            </div>

            <div className="container">
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Login</button>
            </div>
            {test}
          </div>
        </form>
        </div>
      </Center>
    );
  }else
  {let test
    if (this.props.loggedUser.type === "investor") {
      test = <div>Investor Signed In</div>;
      window.location.hash = "/InvestorPage";
    } else if ((this.props.loggedUser.type === "Lawyer")||(this.props.loggedUser.type === "Reviewer")) {
      test = <div>Employee Signed In</div>;
      window.location.hash = "/lawyer_workspace";
    }
    else if(this.props.loggedUser.type==='Reviewer'){
            window.location.hash = "/";

    }
    else if(this.props.loggedUser.type==='Admin'){
 window.location.hash = "/";
    }
    return (
      <Center>
        <div className="col-md-3 col-md-offset-6">
          <form className="white" onSubmit={this.handleSubmit}>
            <div className="container center padding-70">
              <h3
                className="grey-text text-darken-3"
                style={{ lineHeight: 4 }}
              >
                تسجيل دخول
              </h3>
              <div className="container">
                <div className="input-field">
                  <label htmlFor="email">
                    إسم المستخدم او البريد الالكتروني
                  </label>
                  <input
                    type="text"
                    id="email"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="container">
                <div className="input-field">
                  <label htmlFor="password">كلمة السر</label>
                  <input
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">
                  تسجيل دخول
                </button>
              </div>
              {test}
            </div>
          </form>
        </div>
      </Center>
    );

  }
}
}
SignIn.propTypes = {
  login: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser,
isEnglish:state.nav.isEnglish});

export default connect(
  mapStateToProps,
  { login }
)(SignIn);

