
import Form from "react-bootstrap/Form";
import React, { Component,Col,Row } from "react";
import "bootstrap/dist/css/bootstrap.css";
export class EmployeeForm extends Component {
    render() {

        return (
            <div class="card">
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                </Form>;
            </div>
        );
    }
}

export default EmployeeForm;
// "username": "Alsousdfghmjkhgfdidan",
//         "password": "mshwed h2oklmdvol",
//         "email": "Hwedfdghi@gmail.com",
//         "dateOfBirth": "1998-02-14T00:00:00.000Z",
//         "firstName": "Ahmed",
//         "middleName": "Amr",
//         "lastName": "Souidan",
//         "emp_type": "Lawyer",
//         "joined_on": "2018-02-15T00:00:00.000Z"
