import React, { Component } from "react";
import EmployeeForm from "../components/EmployeeForm";

const axios = require("axios");

class RegisterEmployee extends Component {

    state = {  };


    render() {
        console.log(this.state.companies);
        return (
            <div className="RegisterEmployee">
                <EmployeeForm />

            </div>
        );
    }

}


export default RegisterEmployee;