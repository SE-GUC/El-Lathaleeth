import React, { Component } from "react";
// import { Button, Form } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.css";
export class DetailedForm extends Component {
         state = { clicked: false };
         render() {
             let content = ""
             for (let p in this.props.form) {
                 if (this.props.form.hasOwnProperty(p)) {
                     content +=  p + " : " + this.props.form[p] + "\n";
                 }
             }    
           return (
             <div class="card">
               <div class="card-header">{this.props.form.formType}</div>
               <div class="card-body">
                 <h5 class="card-title">
                   Mr./Mrs. {this.props.form.investor.firstName}
                 </h5>
                 <p class="card-text">
                 {content}
                 </p>
                 <button
                   type="button"
                   onClick={this.props.reviewForm.bind(
                     this,
                     "5ca9ea8fd0935b3388eaa962",
                     this.props.form._id
                   )}
                   class="btn btn-success"
                 >
                   {" "}
                   Approve This Case
                 </button>{" "}
               </div>
                   {/* <Form reply>
                       <Form.TextArea />
                       <Button content='Add Comment' labelPosition='left' icon='edit' primary />
                   </Form> */}
             </div>
           );
         }
       }

export default DetailedForm;
