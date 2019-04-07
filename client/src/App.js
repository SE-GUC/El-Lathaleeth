import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import LawyerPage from "./pages/LawyerPage";
import lawyerPendingForms from "./pages/lawyerPendingForms";
import InvestorPage from "./pages/InvestorPage";


import "./App.css";
const axios = require("axios");

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
          <Route path="/lawyerPendingForms" component={lawyerPendingForms} />
       <li><NavLink to="/LawyerPage">LawyerPage</NavLink></li>  
       <li><NavLink to="/lawyerPendingForms">My Pending Forms</NavLink></li> 
       <li><NavLink to="/InvestorPage">My Companies</NavLink></li>         
          <Route path="/LawyerPage" component={LawyerPage} />
          <Route path="/lawyerPendingForms" component={lawyerPendingForms} />
          <Route path="/InvestorPage" component={InvestorPage} />

        </div>
      </HashRouter>
    );
  }
}

export default App;
