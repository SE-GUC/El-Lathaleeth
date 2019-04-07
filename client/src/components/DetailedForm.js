import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export class DetailedForm extends Component {
         state = { clicked: false };
         render() {
           return (
             <div class="card">
               <div class="card-header">{this.props.form.formType}</div>
               <div class="card-body">
                 <h5 class="card-title">
                   Mr./Mrs. {this.props.form.investor.firstName}
                 </h5>
                 <p class="card-text">
                   <p class="card-text" />
                 </p>
                 <button
                   type="button"
                   onClick={this.props.reviewForm.bind(
                     this,
                     "5ca8d9c18bc46d2d88c6a9bd",
                     this.props.form._id
                   )}
                   class="btn btn-success"
                 >
                   {" "}
                   Approve This Case
                 </button>{" "}
               </div>
             </div>
           );
         }
       }

export default DetailedForm;
