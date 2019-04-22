import React, { Component } from "react";
import { connect } from "react-redux";
import html2canvas from "html2canvas";
import Cards from "../components/Cards";
import jsPDF from 'jspdf';
import DetailedForm from "../components/DetailedForm";

const axios = require("axios");

class lawyer_workspace extends Component {
  state = { pending_forms: [], reviewed_forms: [], filled_forms: [] };

  componentDidMount = async () => {
    console.log(this.props.loggedUser);
    const lawyerinfo = await axios
      .get(
        "https://lathaleeth.herokuapp.com/api/entity_emp/workSpace/" +
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
          {pending_forms.length > 0 && this.props.isEnglish && <h4 className="col-md-3 col-md-offset-6">Pending Forms</h4>}
          {pending_forms.length > 0 && !this.props.isEnglish && <h4 className="col-md-3 col-md-offset-6">الإستمارات في قيد الانتظار </h4>}
          {pending_forms.length > 0 && (
            <Cards
            className="col-md-3 col-md-offset-6"
              forms={pending_forms}
              tobereviewed={true}
              reviewForm={this.reviewForm}
              addComment={this.addComment}
              pay={false}
            />
          )}
        </div>
        <div className="Reviewed Forms">
          {reviewed_forms.length > 0 && this.props.isEnglish &&<h4 className="col-md-3 col-md-offset-6">Reviewed Forms</h4>}
          {reviewed_forms.length > 0 && !this.props.isEnglish &&<h4 className="col-md-3 col-md-offset-6">إستمارات مراجعة</h4>}
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
          {filled_forms.length > 0 && this.props.isEnglish &&<h4 className="col-md-3 col-md-offset-6">Filled Forms</h4>}
          {filled_forms.length > 0 && !this.props.isEnglish &&<h4 className="col-md-3 col-md-offset-6"> إستماراتي</h4>}
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
      "https://lathaleeth.herokuapp.com/api/forms/review/" + idl + "/" + id
    );
  };
  pay = async (id) => {
      const lawyerinfo = await axios
      .get(
        "https://lathaleeth.herokuapp.com/api/entity_emp/workSpace/" +
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
      "https://lathaleeth.herokuapp.com/api/forms/formPaid/"+ id
    );
  };
  /*print = async form => {
    let hey = <div id="printme">
      <DetailedForm
        form={form}
        tobereviewed={false}
        pay={false}
        reviewForm={false}
        addComment={false}
      />
    </div>;
    const input = document.getElementById("printme");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };*/
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
      "https://lathaleeth.herokuapp.com/api/forms/commentOnForm/" + id,
      body
    );
    const lawyerinfo = await axios
      .get(
        "https://lathaleeth.herokuapp.com/api/entity_emp/workSpace/" +
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
  loggedUser: state.auth.loggedUser,
  isEnglish: state.nav.isEnglish
});
 

export default connect(mapStateToProps)(lawyer_workspace);
