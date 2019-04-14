import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import LawyerPage from "./pages/LawyerPage";
import lawyerPendingForms from "./pages/lawyerPendingForms";
import lawyer_workspace from "./pages/lawyer_workspace";
import CasePage from "./pages/CasePage";
import InvestorPage from "./pages/InvestorPage";
import trackCasePage from "./pages/trackCasePage";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import "bootstrap/dist/css/bootstrap.css";
import RegisterEmployee from "./pages/RegisterEmployee";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Provider } from "react-redux";
import store from "./globalState/store";
import FillForm from "./pages/FillForm";

import OneForm from "./pages/OneForm";
import RegisterInvestor from "./pages/RegisterInvestor";
import ViewInvestorProfile from "./pages/ViewInvestorProfile";
import UpdateInvestorProfile from "./pages/UpdateInvestorProfile";
import Homepage from "./pages/Homepage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <body className="App">
            <header>
              <Navbar />
              <Homepage />

            </header>
            <main>
              <Route exact path="/LawyerPage" component={LawyerPage} />
              <Route
                exact
                path="/lawyerPendingForms"
                component={lawyerPendingForms}
              />
              <Route exact path="/InvestorPage" component={InvestorPage} />
              <Route exact path="/CasePage" component={CasePage} />
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
              <Route exact path="/signup" component={SignUp} />
            </main>
            <footer class="page-footer grey darken-3 fixed bottom width-100%">
              <div class="container">
                <div class="row">
                  <div class="col l6 s12">
                    <h5 class="white-text">About</h5>
                    <p class="grey-text text-lighten-4">
                      A website by the people for the people.
                    </p>
                  </div>
                  <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                    <ul>
                      <li>
                        <a class="grey-text text-lighten-3" href="#!">
                          Meet Lathaleeth
                        </a>
                      </li>
                      <li>
                        <a class="grey-text text-lighten-3" href="#!">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="footer-copyright">
                <div class="container align left">
                  © 2019 Sumerge feat.Lathaleeth
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
