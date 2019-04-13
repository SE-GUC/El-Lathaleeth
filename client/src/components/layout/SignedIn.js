import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedIn = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink style={{ textDecoration: 'none', color: 'white' }} to='/'>Log Out</NavLink></li>
        <li><NavLink style={{ textDecoration: 'none', color: 'white' }} to='/' className="logo"><i class="material-icons">face</i></NavLink></li>
      </ul>
    </div>
  )
}

export default SignedIn;
