import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../globalState/actions/authActions";
import PropTypes from "prop-types";

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
  login = () => {
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  };
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

    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="container center padding-70">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="container">
              <div className="input-field">
                <label htmlFor="email">Email or Username</label>
                <input type="email" id="email" onChange={this.handleChange} />
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
          </div>
        </form>
      </div>
    );
  }
}
SignIn.propTypes = {
  login: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});

export default connect(
  mapStateToProps,
  { login }
)(SignIn);

