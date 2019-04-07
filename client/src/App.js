import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import LawyerPage from "./pages/LawyerPage";
import lawyerPendingForms from "./pages/lawyerPendingForms";
import InvestorPage from "./pages/InvestorPage";
import trackCasePage from "./pages/trackCasePage";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import RegisterEmployee  from "./pages/RegisterEmployee";
import "./App.css";


// const form_funcs = require("./funcs/form_funcs");
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <h1>Summerge Lathaleeth</h1>
          <ul className="header">
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#/LawyerPage"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                LawyerPage
              </a>
              <a
                class="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#/lawyerPendingForms"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Pending Forms
              </a>
              <a
                class="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#/InvestorPage"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                My Companies
              </a>
              <a
                class="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#/trackCasePage"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Track my Case
              </a>
              {/* <a
                class="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#/RegisterEmployee"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Register Employee
              </a> */}
            </div>
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              />
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                {" "}
              </div>
            </div>
          </ul>
          <Route path="/LawyerPage" component={LawyerPage} />
          <Route
            path="/lawyerPendingForms"
            component={lawyerPendingForms}
          />
          <Route path="/InvestorPage" component={InvestorPage} />
          <Route path="/RegisterEmployee" component={RegisterEmployee} />
          <Route path="/trackCasePage" component={trackCasePage} />
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="#/LawyerPage">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/LawyerPage">Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/LawyerPage">Meet El Lathaleeth</Nav.Link>
            </Nav.Item>
          </Nav>
          ;
        </div>
      </HashRouter>
    );
  }
}

export default App;
