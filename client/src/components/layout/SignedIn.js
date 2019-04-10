import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedIn = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="logo"><i class="material-icons">face</i></NavLink></li>
      </ul>
    </div>
  )
}

export default SignedIn;
