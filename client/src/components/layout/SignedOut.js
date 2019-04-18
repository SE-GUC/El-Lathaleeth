import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOut = () => {
  return (
    <div>
      <ul className="right"style={{ textDecoration: 'none', color: 'white' }}>
        <li><NavLink style={{ textDecoration: 'none', color: 'white' }} to='/signup'>Signup</NavLink></li>
        <li><NavLink style={{ textDecoration: 'none', color: 'white' }} to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOut;