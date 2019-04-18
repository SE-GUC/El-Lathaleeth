import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import LawyerPage from "./pages/LawyerPage";
import lawyerPendingForms from "./pages/lawyerPendingForms";
import lawyer_workspace from "./pages/lawyer_workspace";
import CasePage from "./pages/CasePage";
import InvestorPage from "./pages/InvestorPage";
import trackCasePage from "./pages/trackCasePage";
import SignIn from "./components/auth/SignIn";
import "bootstrap/dist/css/bootstrap.css";
import RegisterEmployee from "./pages/RegisterEmployee";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Provider } from "react-redux";
import store from "./globalState/store";
import FillForm from "./pages/FillForm";
import Carousel from "./components/Carousel";
import LawyerFillForm from "./pages/LawyerFillForm";
import PayPage from "./pages/PayPage";
import UpdateOneForm from "./pages/UpdateOneForm";
import RegisterInvestor from "./pages/RegisterInvestor";
import ViewInvestorProfile from "./pages/ViewInvestorProfile";
import UpdateInvestorProfile from "./pages/UpdateInvestorProfile";
import UpdateFormPage from "./pages/UpdateFormPage";

import Homepage from "./pages/Homepage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <body className="App">
            <Navbar />
            <main>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/PayPage" component={PayPage} />

              <Route
                exact
                path="/lawyerFillForm"
                component={LawyerFillForm}
              />

              <Route exact path="/LawyerPage" component={LawyerPage} />
              <Route path="/UpdateOneForm" component={UpdateOneForm} />
              <Route
                exact
                path="/UpdateFormPage"
                component={UpdateFormPage}
              />

              <Route
                exact
                path="/lawyerPendingForms"
                component={lawyerPendingForms}
              />
              <Route exact path="/InvestorPage" component={InvestorPage} />
              <Route exact path="/CasePage" component={CasePage} />
      
              <Route
                exact
                path="/MyProfile"
                component={ViewInvestorProfile}
              />
              <Route
                exact
                path="/UpdateInvestorProfile"
                component={UpdateInvestorProfile}
              />
              <Route exact path="/FillForm" component={FillForm} />

              <Route
                exact
                path="/RegisterEmployee"
                component={RegisterEmployee}
              />
              <Route
                exact
                path="/trackCasePage"
                component={trackCasePage}
              />
              <Route
                exact
                path="/lawyer_workspace"
                component={lawyer_workspace}
              />
              <Route exact path="/signin" component={SignIn} />
              {<Route exact path="/signup" component={RegisterInvestor} />}
            </main>
            <footer className="page-footer grey darken-3 fixed bottom width-100%">
              <div className="container">
                <div className="row">
                  <div className="col l6 s12">
                    <h5 className="white-text">About</h5>
                    <p className="grey-text text-lighten-4">
                      A website by the people for the people.
                    </p>
                  </div>
                  <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                      <li>
                        <a className="grey-text text-lighten-3" href="#!">
                          Meet Lathaleeth
                        </a>
                      </li>
                      <li>
                        <a className="grey-text text-lighten-3" href="#!">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-copyright">
                  <div className="container align left">
                    © 2019 Sumerge feat.Lathaleeth
                  </div>
                </div>
              </div>
            </footer>
          </body>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
