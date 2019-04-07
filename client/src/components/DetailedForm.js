import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export class DetailedForm extends Component {
         state = { clicked: false };
          handleChange = (event) => {
          this.setState({value: event.target.value});
         }
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
                 <div class="ui input">
                  <input type="text" placeholder="Write comment" 
                  value={this.state.value}
                  onChange={this.handleChange} />

                  <button type="button"
                  onClick={this.props.addComment.bind(
                    this,
                    this.props.form._id,
                    {
                     authorType:"Reviewer",
                     author: "5ca9ea8fd0935b3388eaa962",
                     text: this.state.value,
                     postedOn: Date().now
                    }
                  )}
                  class="btn btn-outline-secondary btn-sm"
                  >
                  {" "}
                    Add Comment
                  </button>{" "}
                 </div>
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
             </div>
           );
         }
       }

export default DetailedForm;
