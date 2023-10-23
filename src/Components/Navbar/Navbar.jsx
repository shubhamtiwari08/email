import React from 'react'

import './Navbar.css'
import { NavLink } from 'react-router-dom'


function Navbar() {

const getActiveStyle=({isActive})=>{
    return({
       color:  isActive?"grey":"black",
       border:isActive?"1px solid #E1E5EA":"none",
       backgroundColor:isActive?"#E1E5EA":"transparent"
    })
}
 

  return (
    <div className='nav-bar'>
        <p>Filter By:</p>
        <NavLink to={'/unread'} style={getActiveStyle}>Unread</NavLink>
        <NavLink to={'/read'} style={getActiveStyle}>Read</NavLink>
        <NavLink to={'/favorites'} style={getActiveStyle}>Favorites</NavLink>
    </div>
  )
}

export default Navbar