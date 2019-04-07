import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import LawyerPage from "./pages/LawyerPage";
import lawyerPendingForms from "./pages/lawyerPendingForms";
import lawyer_workspace from "./pages/lawyer_workspace";
import reviewer_workspace from "./pages/reviewer_workspace";

import InvestorPage from "./pages/InvestorPage";


import "./App.css";



// const form_funcs = require("./funcs/form_funcs");
class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="App">
          <h1>Summerge Lathaleeth</h1>
          <ul className="header">
       <li><NavLink to="/LawyerPage">LawyerPage</NavLink></li>  

       <li><NavLink to="/lawyerPendingForms">My Pending Forms</NavLink></li>          
       <li><NavLink to="/lawyer_workspace">Lawyer Workspace</NavLink></li>
       <li><NavLink to="/reviewer_workspace">Reviewer Workspace</NavLink></li>
       <li><NavLink to="/InvestorPage">My Companies</NavLink></li>         
       
          </ul>
          <Route path="/LawyerPage" component={LawyerPage} />
          <Route path="/lawyerPendingForms" component={lawyerPendingForms} />
          <Route path="/lawyer_workspace" component={lawyer_workspace} />
          <Route path="/reviewer_workspace" component={reviewer_workspace} />
          <Route path="/InvestorPage" component={InvestorPage} />

        </div>
      </HashRouter>
    );
  }
     
}

export default App;
