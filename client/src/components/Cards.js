import React, { Component } from "react";
import FormCard from "./FormCard";
import { connect } from "react-redux";
import "./abougabal.css";

class Cards extends Component {
  render() {
    const bool = this.props.tobereviewed;
    return (
      <div className="row">
        {this.props.forms.map(form => (
          <div className = "abougabal">
            <FormCard form={form} tobereviewed={bool} 
            pay={this.props.pay}
            reviewForm={this.props.reviewForm} addComment={this.props.addComment}/>
          </div>
        ))}
     </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});

export default connect(mapStateToProps)(Cards);
