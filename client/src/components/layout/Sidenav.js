import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import NotificationBadge from "react-notification-badge";
import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import axios from "axios";

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.state = { payable: [], forms: [], flag: true };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.isLoggedIn !== nextProps.isLoggedIn ||
      this.state.flag !== nextState.flag ||
      this.props.refresh !== nextProps.refresh ||
      this.props.isEnglish !== nextProps.isEnglish
    );
  }
  componentDidUpdate = async () => {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
    try {
      if (this.props.loggedUser.type === "investor") {
        const forms = await axios.get(
          "http://localhost:5000/api/forms/byInvestorID/" +
            this.props.loggedUser.id
        );
        const mappedforms = forms.data.data.map(e => {
          const filteredComments = e.comments.filter(a => {
            return !a.hasOwnProperty("read_at");
          });
          e.comments = filteredComments;
          return e;
        });
        const newforms = mappedforms.filter(e => {
          return e.status === "pending lawyer" && e.comments.length > 0;
        });
        const payable = forms.data.data.filter(e => {
          return e.status === "reviewer check";
        });
        this.setState({ payable: payable, forms: newforms, flag: false });
      }
    } catch (e) {}
  };
  componentDidMount = async () => {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
    try {
      if (this.props.loggedUser.type === "investor") {
        const forms = await axios.get(
          "http://localhost:5000/api/forms/byInvestorID/" +
            this.props.loggedUser.id
        );
        const mappedforms = forms.data.data.map(e => {
          const filteredComments = e.comments.filter(a => {
            return !a.hasOwnProperty("read_at");
          });
          e.comments = filteredComments;
        });
        const newforms = mappedforms.data.data.filter(e => {
          return e.status === "pending lawyer" && e.comments.length > 0;
        });

        this.setState({ forms: newforms });
      }
    } catch (e) {}
  };
  get notif() {
    const { forms } = this.state;
    if (forms.length > 0) {
      return (
        <div>
          <li>
            <NotificationBadge count={forms.length} className={"abc"} />
            <a href="#/UpdateFormPage" class="sidenav-close">
              {this.props.isEnglish && <div>Update Form</div>}
              {!this.props.isEnglish && <div>تحديث الاستمارة</div>}
            </a>
          </li>
        </div>
      );
    }
    // ...else return nothing
    return null;
  }
  get notif1() {
    const { payable } = this.state;
    if (payable.length > 0) {
      return (
        <div>
          <li>
            <NotificationBadge count={payable.length} className={"abc"} />
            <a href="#/PayPage" className="sidenav-close">
              {this.props.isEnglish && <div>Pay For Form</div>}
              {!this.props.isEnglish && <div>دفع ثمن الاستمارة</div>}
            </a>
          </li>
        </div>
      );
    }
    // ...else return nothing
    return null;
  }
  render() {
    let displayed;
    const { forms } = this.state;
    let lawyerstuff = (
      <div>
        <li>
          {this.props.isEnglish && (
            <a className="subheader grey darken-3">Lawyer</a>
          )}
          {!this.props.isEnglish && (
            <a className="subheader grey darken-3">محامي</a>
          )}
        </li>
        <li>
          <a href="#/LawyerPage" className="sidenav-close">
            {this.props.isEnglish && <div>Reserve Cases</div>}
            {!this.props.isEnglish && <div>حجز قضية</div>}
          </a>
        </li>
        <li>
          <a href="#/lawyer_workspace" className="sidenav-close">
            {this.props.isEnglish && <div>Workspace</div>}
            {!this.props.isEnglish && <div>مساحة العمل</div>}
          </a>
        </li>
        <li>
          <a href="#/lawyerFillForm" className="sidenav-close">
            {this.props.isEnglish && <div>Fill Form for Investor</div>}
            {!this.props.isEnglish && <div>ملء الاستمارة للمستثمر</div>}
          </a>
        </li>
        {/*<li>
          <a href="#/lawyerPendingForms" className="sidenav-close">
            Pending Forms
          </a>
        </li>*/}
        <li>
          <a href="#/CasePage">
            {this.props.isEnglish && <div>View All Cases</div>}
            {!this.props.isEnglish && <div>عرض جميع القضايا</div>}
          </a>
        </li>
      </div>
    );
    let reviewerstuff = (
      <div>
        <li>
          {this.props.isEnglish && (
            <a className="subheader grey darken-3">Reviewer</a>
          )}
          {!this.props.isEnglish && (
            <a className="subheader grey darken-3">مراجع</a>
          )}
        </li>
        <li>
          <a href="#/LawyerPage" className="sidenav-close">
            {this.props.isEnglish && <div>Reserve Cases</div>}
            {!this.props.isEnglish && <div>حجز قضية</div>}
          </a>
        </li>
        <li>
          <a href="#/lawyer_workspace" className="sidenav-close">
            {this.props.isEnglish && <div>Workspace</div>}
            {!this.props.isEnglish && <div>مساحة العمل</div>}
          </a>
        </li>

        {/* <li>
          <a href="#/lawyerPendingForms" className="sidenav-close">
            Pending Forms
          </a>
        </li>*/}
        <li>
          <a href="#/CasePage">
            {this.props.isEnglish && <div>View All Cases</div>}
            {!this.props.isEnglish && <div>عرض جميع القضايا</div>}
          </a>
        </li>
      </div>
    );
    let investorstuff = (
      <div>
        <li>
          {this.props.isEnglish && (
            <a className="subheader grey darken-3">Investor</a>
          )}
          {!this.props.isEnglish && (
            <a className="subheader grey darken-3">مستثمر</a>
          )}
        </li>
        <li>
          <a href="#/InvestorPage" className="sidenav-close">
            {this.props.isEnglish && <div>My Companies</div>}
            {!this.props.isEnglish && <div>شركاتي</div>}
          </a>
        </li>
        {/* <li>
          <a href="#/trackCasePage" className="sidenav-close">
            Track my Case
          </a>
       </li>*/}
        <li>
          <a href="#/FillForm" className="sidenav-close">
            {this.props.isEnglish && <div>Fill Form</div>}
            {!this.props.isEnglish && <div>ملء الاستمارة </div>}
          </a>
        </li>
        <li>
          <a href="#/MyProfile" className="sidenav-close">
            {this.props.isEnglish && <div>My Profile</div>}
            {!this.props.isEnglish && <div>صفحتي</div>}
          </a>
        </li>
        {this.notif}
        {this.notif1}

        {/* {this.notif(forms)} */}
      </div>
    );
    let adminstuff = (
      <div>
        <li>
          {this.props.isEnglish && (
            <a className="subheader grey darken-3">Admin</a>
          )}
          {!this.props.isEnglish && (
            <a className="subheader grey darken-3">مشرف</a>
          )}
        </li>
        <li>
          <a href="#/RegisterEmployee">
            {this.props.isEnglish && <div>Register Employees</div>}
            {!this.props.isEnglish && <div>تسجيل الموظفين</div>}
          </a>
        </li>
        <li>
          <a href="#/CasePage">
            {this.props.isEnglish && <div>View All Cases</div>}
            {!this.props.isEnglish && <div>عرض جميع القضايا</div>}
          </a>
        </li>
      </div>
    );
    let userstuff = (
      <div>
        <li>
          {this.props.isEnglish && (
            <a className="subheader grey darken-3">User</a>
          )}
          {!this.props.isEnglish && (
            <a className="subheader grey darken-3">مستخدم غير مسجل</a>
          )}
        </li>
        <li>
          <a href="#/EstablishedCompanies">
            {this.props.isEnglish && <div>View Companies</div>}
            {!this.props.isEnglish && <div>عرض الشركات</div>}
          </a>
        </li>
      </div>
    );
    try {
      if (this.props.loggedUser.type === "Lawyer") {
        displayed = lawyerstuff;
      } else if (this.props.loggedUser.type === "Reviewer") {
        displayed = reviewerstuff;
      } else if (this.props.loggedUser.type === "Admin") {
        displayed = adminstuff;
      } else if (this.props.loggedUser.type === "investor") {
        displayed = investorstuff;
      } else {
        displayed = userstuff; //unregistered users
      }
    } catch (e) {
      displayed = "";
    }
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          {/* <li />
          {lawyerstuff}
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader grey darken-3">Investor</a>
          </li>
          <li>
            <a href="#/ViewInvestorProfile"className="sidenav-close">My Profile</a>
          </li>
          <li>
            <a href="#/InvestorPage"className="sidenav-close">My Companies</a>
          </li>
          <li>
            <a href="#/trackCasePage" className="sidenav-close">
              Track my Case
            </a>
          </li></div>
    let adminstuff=<div>
      <li>
            <a className="subheader grey darken-3">Admin</a>
          </li>
          <li>
            <a href="#/RegisterEmployee">Register Employees</a>
          </li>

          {adminstuff} */}
          {displayed}
        </ul>
        <a
          href="#"
          data-target="slide-out"
          className="sidenav-trigger show-on-large"
          style={{ textDecoration: "none", color: "white" }}
        >
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser,
  refresh: state.nav.refresh,
  isEnglish: state.nav.isEnglish
});

export default connect(mapStateToProps)(Sidenav);
// export default Sidenav
