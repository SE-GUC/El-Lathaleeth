import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "../components/Cards";

const axios = require("axios");

class lawyer_workspace extends Component {
  state = { pending_forms: [], reviewed_forms: [], filled_forms: [] };

  componentDidMount = async () => {
    console.log(this.props.loggedUser);
    const lawyerinfo = await axios
      .get(
        "http://localhost:5000/api/entity_emp/workSpace/" +
          this.props.loggedUser.id
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          pending_forms: res.data.pending_forms,
          reviewed_forms: res.data.reviewed_forms,
          filled_forms: res.data.filled_forms
        });
      });
  };

  render() {
    console.log(this.state);
    const pending_forms = this.state.pending_forms;
    const reviewed_forms = this.state.reviewed_forms;
    const filled_forms = this.state.filled_forms;
    return (
      <div className="lawyer_workspace">
        <div className="Pending Forms">
          {pending_forms.length > 0 && <h4 className="col-md-3 col-md-offset-6">Pending Forms:</h4>}
          {pending_forms.length > 0 && (
            <Cards
              forms={pending_forms}
              tobereviewed={true}
              reviewForm={this.reviewForm}
              addComment={this.addComment}
              pay={false}
            />
          )}
        </div>
        <div className="Reviewed Forms">
          {reviewed_forms.length > 0 && <h4 className="col-md-3 col-md-offset-6">Reviewed Forms:</h4>}
          {reviewed_forms.length > 0 && (
            <Cards
              forms={reviewed_forms}
              tobereviewed={false}
              reviewForm={this.reviewForm}
              addComment={this.addComment}
              pay={false}
            />
          )}
        </div>
        <div className="Filled Forms">
          {filled_forms.length > 0 && <h4 className="col-md-3 col-md-offset-6">Filled Forms:</h4>}
          {filled_forms.length > 0 && (
            <Cards
              forms={filled_forms}
              tobereviewed={false}
              reviewForm={this.reviewForm}
              addComment={this.addComment}
              pay={this.pay}
              edit={this.edit}
            />
          )}
        </div>
      </div>
    );
  }
edit= async (id)=>{
  

}
  reviewForm = async (idl, id) => {
    this.setState({
      pending_forms: this.state.pending_forms.filter(form => {
        return form._id !== id;
      })
    });

    const reserve = await axios.put(
      "http://localhost:5000/api/forms/review/" + idl + "/" + id
    );
  };
  pay = async (id) => {
      const lawyerinfo = await axios
      .get(
        "http://localhost:5000/api/entity_emp/workSpace/" +
          this.props.loggedUser.id
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          pending_forms: res.data.pending_forms,
          reviewed_forms: res.data.reviewed_forms,
          filled_forms: res.data.filled_forms
        });
      });
    const reserve = await axios.put(
      "http://localhost:5000/api/forms/formPaid/"+ id
    );
  };
  addComment = async (id, body) => {
    //still need to update data viewed when comment is written
    // this.setState({
    //   forms: this.state.forms.map(form => {
    //     if (form._id === id) {
    //       console.log(body);
    //       form.comments.push(body);
    //     }
    //   })
    // });
    console.log(this.state.pending_forms);
    //   useAlert("Comment Submitted")
    const add = await axios.put(
      "http://localhost:5000/api/forms/commentOnForm/" + id,
      body
    );
    const lawyerinfo = await axios
      .get(
        "http://localhost:5000/api/entity_emp/workSpace/" +
          this.props.loggedUser.id
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          pending_forms: res.data.pending_forms,
          reviewed_forms: res.data.reviewed_forms,
          filled_forms: res.data.filled_forms
        });
      });
  };
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});
export default connect(mapStateToProps)(lawyer_workspace);
