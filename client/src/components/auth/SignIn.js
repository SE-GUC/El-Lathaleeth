import React, { Component } from "react";
import Center from 'react-center';
import { connect } from "react-redux";
import { login } from "../../globalState/actions/authActions";
import PropTypes from "prop-types";
import axios from "axios";

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
    let test
    if (this.props.loggedUser.type === "investor") {
      test = <div>Investor Signed In</div>;
      window.location.hash = "/InvestorPage";
    } else if (this.props.loggedUser.type === "Lawyer") {
      test = <div>Employee Signed In</div>;
      window.location.hash = "/";
    }
    return (
      <Center>
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="container center padding-70">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="container">
              <div className="input-field">
                <label htmlFor="email">Email or Username</label>
                <input  id="email" onChange={this.handleChange} />
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
      </Center>
    );
  }
}
SignIn.propTypes = {
  login: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser});

export default connect(
  mapStateToProps,
  { login }
)(SignIn);

