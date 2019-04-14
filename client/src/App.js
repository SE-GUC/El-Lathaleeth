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
import OneForm from "./pages/OneForm";
import RegisterInvestor from "./pages/RegisterInvestor";
import ViewInvestorProfile from "./pages/ViewInvestorProfile";
import UpdateInvestorProfile from "./pages/UpdateInvestorProfile";
import Homepage from "./pages/Homepage";

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <body className="App">
        <HashRouter>
          <header>
            <Navbar />
          </header>
=======
      <HashRouter>
        <body className="App">
          <Homepage />
>>>>>>> 78c8ded18c3bade38911d4b5ff64e3d6c29601e3
          <main>
            <Route exact path="/LawyerPage" component={LawyerPage} />
            <Route
              exact
              path="/lawyerPendingForms"
              component={lawyerPendingForms}
            />
            <Route exact path="/InvestorPage" component={InvestorPage} />
            <Route exact path="/CasePage" component={CasePage} />
<<<<<<< HEAD
            <Route exact path="/OneForm" component={OneForm} />
=======
>>>>>>> 78c8ded18c3bade38911d4b5ff64e3d6c29601e3
            <Route
              exact
              path="/ViewInvestorProfile"
              component={ViewInvestorProfile}
            />
            <Route
              exact
              path="/UpdateInvestorProfile"
              component={UpdateInvestorProfile}
            />

            <Route
              exact
              path="/RegisterEmployee"
              component={RegisterEmployee}
            />
            <Route exact path="/trackCasePage" component={trackCasePage} />
            <Route
              exact
              path="/lawyer_workspace"
              component={lawyer_workspace}
            />
            <Route exact path="/signin" component={SignIn} />
            {<Route exact path="/signup" component={RegisterInvestor} />}
          </main>
<<<<<<< HEAD
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
            </div>
            <div className="footer-copyright">
              <div className="container align left">
                © 2019 Sumerge feat.Lathaleeth
              </div>
            </div>
          </footer>
        </HashRouter>
      </body>
=======
        </body>
      </HashRouter>
>>>>>>> 78c8ded18c3bade38911d4b5ff64e3d6c29601e3
    );
  }
}

export default App;
