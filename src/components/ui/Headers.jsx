import React from 'react'
import { NavLink } from 'react-router-dom'

const Headers = () => {
  return (
    <header className="header">                    {/* ✅ add this */}
      <div className='grid navbar-grid'>
        <div className='logo'>
          <NavLink>
            <h1>WordAtlas</h1>
          </NavLink>
        </div>
        <nav className="nav">                      {/* ✅ add this */}
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/country">Country</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Headers
