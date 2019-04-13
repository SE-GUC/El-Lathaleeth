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
import Homepage from "./pages/Homepage";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Homepage />
          <Route path="/LawyerPage" component={LawyerPage} />
          <Route path="/lawyerPendingForms" component={lawyerPendingForms} />
          <Route path="/InvestorPage" component={InvestorPage} />
          <Route path="/RegisterEmployee" component={RegisterEmployee} />
          <Route path="/trackCasePage" component={trackCasePage} />
          <Route path="/lawyer_workspace" component={lawyer_workspace} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
