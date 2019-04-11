import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import LawyerPage from "./pages/LawyerPage";
import lawyerPendingForms from "./pages/lawyerPendingForms";
import lawyer_workspace from "./pages/lawyer_workspace";
import InvestorPage from "./pages/InvestorPage";
import trackCasePage from "./pages/trackCasePage";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import RegisterEmployee from "./pages/RegisterEmployee";
import "./App.css";
import Navbar from "./components/layout/Navbar";
 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Route path="/LawyerPage" component={LawyerPage} />
          <Route path="/lawyerPendingForms" component={lawyerPendingForms} />
          <Route path="/InvestorPage" component={InvestorPage} />
          <Route path="/RegisterEmployee" component={RegisterEmployee} />
          <Route path="/trackCasePage" component={trackCasePage} />
          <Route path="/lawyer_workspace" component={lawyer_workspace} />
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
        </div>
      </HashRouter>
    );
  }
}

export default App;
