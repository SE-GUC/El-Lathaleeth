import React from "react";
import { Link } from "react-router-dom";
import Sidenav from "./Sidenav";
import SignedIn from "./SignedIn";
import { connect } from "react-redux";
import SignedOut from "./SignedOut";
import SignIn from "../auth/SignIn";

// const SignIn=()=>{
//   this.setProps({isLoggedIn:true})
// }
// const SignOut = () => {
//   this.setProps({ isLoggedIn: false });
// };
const Navbar = () => {
  let signed
  try{
  if(this.props.isLoggedIn===true){
    signed=<SignedIn/>
  }
  else
  {signed=<SignedOut />}}
  catch(e){signed=<SignedOut  />
  console.log(e)}
  return (
    <nav className="nav-wrapper grey darken-3">
     <Sidenav />
      <div className="container">
       
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/" className="brand-logo">
          <i className="material-icons">donut_small</i>Sumerge Lathaleeth
        </Link>
        {signed}
      </div>
    </nav>
  );
};
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedUser: state.auth.loggedUser
});

export default connect(mapStateToProps)(Navbar);