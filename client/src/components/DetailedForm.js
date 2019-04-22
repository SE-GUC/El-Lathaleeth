import React, { Component } from "react";
import { connect } from "react-redux";

// import { Button, Form } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.css";
export class DetailedForm extends Component {
  goedit = e => {
    window.location.hash = "UpdateOneForm/" + this.props.form._id;
  };
  state = { clicked: false };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const review = this.props.tobereviewed;
    let content = "";
    for (let p in this.props.form) {
      if (this.props.form.hasOwnProperty(p)) {
        content += p + " : " + this.props.form[p] + "\n";
      }
    }
    let payButton;
    let editButton;
    try {
      if (this.props.form.status === "reviewer check") {
        payButton = (
          <div>
            <button
              type="button"
              onClick={this.props.pay.bind(this, this.props.form._id)}
              class="btn btn-success"
            >
              Pay Fees
            </button>
          </div>
        );
      } else {
        payButton = "";
      }
    } catch (e) {}
    const filteredComments = this.props.form.comments.filter(a => {
      console.log(a);
      return !a.hasOwnProperty("read_at");
    });
    const newforms = filteredComments.filter(e => {
      return e.status === "pending reviewer" && e.comments.length > 0;
    });
    if (
      this.props.form.status === "pending reviewer" &&
      filteredComments.length > 0
    ) {
      editButton = (
        <div>
          <button
            type="button"
            onClick={this.goedit.bind(this)}
            class="btn btn-success"
          >
          {this.props.isEnglish &&<div>Edit Form</div>}
              {!this.props.isEnglish &&<div>تصحيح الاستمارة </div>}
            Edit Form
          </button>
        </div>
      );
    } else {
      editButton = "";
    }
    if (this.props.loggedUser.type === "Reviewer") {
      editButton = "";
      payButton = "";
    }

    console.log(this.props.loggedUser);
    return (  
      <div class="card">
        <div class="card-header">{this.props.form.status}</div>
        <div class="card-body">
          {this.props.form.investor.gender === "male" && (
            <h5 class="card-title">
              {this.props.isEnglish && (
                <div>Mr. {this.props.form.investor.name}</div>
              )}
              {!this.props.isEnglish && (
                <div>{this.props.form.investor.name} السيد</div>
              )}
            </h5>
          )}
          {this.props.form.investor.gender === "female" && (
            <h5 class="card-title">
              {this.props.isEnglish && (
                <div>Mrs. {this.props.form.investor.name}</div>
              )}
              {!this.props.isEnglish && (
                <div>{this.props.form.investor.name} السيدة</div>
              )}
            </h5>
          )}
          {this.props.form.investor.investorType === "company" && (
            <h5 class="card-title">
              {this.props.isEnglish && (
                <div>Company: {this.props.form.investor.name}</div>
              )}
              {!this.props.isEnglish && (
                <div>{this.props.form.investor.name} :شركة</div>
              )}{" "}
            </h5>
          )}
          <p class="card-text">
            {this.props.isEnglish && <p>ID: {this.props.form._id}</p>}
            {!this.props.isEnglish && <p> {this.props.form._id}:رقم الهوية</p>}
            {this.props.isEnglish &&<p>Law: {this.props.form.law}</p>}
            {!this.props.isEnglish && <p> {this.props.form.law}:القانون المسجل</p>}
            {this.props.isEnglish &&<p>Legal Form: {this.props.form.legalForm}</p>}
            {!this.props.isEnglish && <p> {this.props.form.legalForm}:الشكل القانوني </p>}
            {this.props.isEnglish &&<p>Form Type: {this.props.form.formType}</p>}
            {!this.props.isEnglish && <p> {this.props.form.formType}:نوع الاستمارة</p>}
            {this.props.isEnglish &&<p>Address: {this.props.form.address}</p>}
            {!this.props.isEnglish && <p> {this.props.form.address}: العنوان</p>}
            {this.props.isEnglish &&<p>Phone Number: {this.props.form.phone}</p>}
            {!this.props.isEnglish && <p> {this.props.form.phone}:رقم الهاتف</p>}
            {this.props.isEnglish &&<p>Fax Number: {this.props.form.fax}</p>}
            {!this.props.isEnglish && <p> {this.props.form.fax}:رقم الفاكس</p>}
            {this.props.isEnglish &&<p>Created On: {this.props.form.createdOn}</p>}
            {!this.props.isEnglish && <p> {this.props.form.createdOn}:تاريخ الإنشاء</p>}
            {this.props.isEnglish && <p>Capital Currency: {this.props.form.capitalCurr}</p>}
            {!this.props.isEnglish && <p> {this.props.form.capitalCurr}:عملة رأس المال </p>}
            {this.props.isEnglish &&<p>Capital Value: {this.props.form.capitalVal}</p>}
            {!this.props.isEnglish && <p> {this.props.form.capitalVal}: رأس المال </p>}

            {this.props.form.boardOfDirectors.map(BoardOfDirector => (
              <div>
                {this.props.isEnglish && <p>--Board Of Directors--</p>}
                {!this.props.isEnglish && <p>--مجلس الإدارة--</p>}
                {this.props.isEnglish && <p>Name: {BoardOfDirector.name}</p>}
                {!this.props.isEnglish && <p>{BoardOfDirector.name} : الاسم</p>}
                {this.props.isEnglish && <p> Nationality: {BoardOfDirector.nationality}</p>}
                {!this.props.isEnglish && <p> {BoardOfDirector.nationality} :جنسية</p>}
                {this.props.isEnglish && <p> Address: {BoardOfDirector.address}</p>}
                {!this.props.isEnglish && <p> {BoardOfDirector.address}: العنوان</p>}
                {this.props.isEnglish && <p>Gender: {BoardOfDirector.gender}</p>}
                {!this.props.isEnglish && <p>{BoardOfDirector.gender}: النوع</p>}
                {this.props.isEnglish && <p>BirthDate: {BoardOfDirector.birthdate}</p>}
                {!this.props.isEnglish && <p> {BoardOfDirector.birthdate}: تاريخ الميلاد </p>}
                {this.props.isEnglish && <p>ID: {BoardOfDirector.idNum}</p>}
                {!this.props.isEnglish && <p> {BoardOfDirector.idNum} :رقم الهوية</p>}
                {this.props.isEnglish && <p>Type Of ID: {BoardOfDirector.typeID}</p>}
                {!this.props.isEnglish && <p>{BoardOfDirector.typeID}: نوع رقم الهوية</p>}
                {this.props.isEnglish && <p> Position: {BoardOfDirector.position}</p>}
                {!this.props.isEnglish && <p> {BoardOfDirector.position} :مركز</p>}
              </div>
            ))}
            {this.props.form.comments.map(comment => (
              
              <div>
              {this.props.isEnglish &&
                <p>Comment:{comment.text}</p>}
                {!this.props.isEnglish &&
                <p>{comment.text}: تعليق</p>}
              </div>
            ))}
            {review && (
              <div class="ui input">
                <ul>
                  <li>
                  {this.props.isEnglish &&
                    <input
                      type="text"
                      placeholder="Write comment"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />}
                    {this.props.isEnglish &&
                    <input
                      type="text"
                      placeholder="إضافة تعليق"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />}
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={this.props.addComment.bind(
                        this,
                        this.props.form._id,
                        {
                          author_type: this.props.loggedUser.type,
                          author: this.props.loggedUser.id,
                          text: this.state.value,
                          postedOn: new Date()
                        }
                      )}
                      class="btn btn-outline-secondary btn-sm"
                    >
                      {this.props.isEnglish &&<div>Add Comment</div>}
                      {!this.props.isEnglish &&<div>إضافة تعليق</div>}
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </p>
          {review && (
            <button
              type="button"
              onClick={this.props.reviewForm.bind(
                this,
                this.props.loggedUser.id,
                this.props.form._id
              )}
              class="btn btn-success"
            >
              {this.props.isEnglish &&<div>Approve Case</div>}
              {!this.props.isEnglish &&<div>الموافقة على القضية </div>}
            </button>
          )}
          {this.props.pay && (
            <div>
              <button
                type="button"
                onClick={this.props.pay.bind(this, this.props.form._id)}
                class="btn btn-success"
              >
              {this.props.isEnglish &&<div>Pay Fees</div>}
              {!this.props.isEnglish &&<div>دفع الرسوم </div>}
                
              </button>
            </div>
          )}
          {editButton}
        </div>
        {/* <Form reply>
                       <Form.TextArea />
                       <Button content='Add Comment' labelPosition='left' icon='edit' primary />
                   </Form> */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser,
  isEnglish: state.nav.isEnglish
});
export default connect(mapStateToProps)(DetailedForm);
