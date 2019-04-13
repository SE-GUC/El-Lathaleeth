import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import LawyerPage from "./pages/LawyerPage";
import lawyerPendingForms from "./pages/lawyerPendingForms";
import lawyer_workspace from "./pages/lawyer_workspace";
import InvestorPage from "./pages/InvestorPage";
import trackCasePage from "./pages/trackCasePage";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import "bootstrap/dist/css/bootstrap.css";
import RegisterEmployee from "./pages/RegisterEmployee";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Homepage from "./pages/Homepage";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <body className="App">
          <header>
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
            <Route path="/signup" component={SignUp} />
          </main>
        </body>
      </HashRouter>
    );
  }
}

export default App;
