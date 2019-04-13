import React from "react";
import { Link } from "react-router-dom";
import Sidenav from "./Sidenav";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
     <Sidenav />
      <div className="container">
       
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/" className="brand-logo">
          <i class="material-icons">donut_small</i>Sumerge Lathaleeth
        </Link>
        <SignedIn />
        <SignedOut />
      </div>
    </nav>
  );
};

export default Navbar;
