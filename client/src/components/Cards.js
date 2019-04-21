import React, { Component } from "react";
import FormCard from "./FormCard";
import { connect } from "react-redux";
class Cards extends Component {
  render() {
    const bool = this.props.tobereviewed;
    return (
      <div class="row">
        {this.props.forms.map(form => (
          <div className = "fixed-width"style = {{width: 400}}>
            <FormCard form={form} tobereviewed={bool} reviewForm={this.props.reviewForm} addComment={this.props.addComment}/>
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
