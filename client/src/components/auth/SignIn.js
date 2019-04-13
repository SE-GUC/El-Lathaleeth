import React, { Component } from "react";
import Center from 'react-center';

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <Center>
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="container center padding-70">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="container">
              <div className="input-field">
                <label htmlFor="email">Email</label>
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
      </Center>
    );
  }
}

export default SignIn;
