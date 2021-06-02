import * as React from 'react';
import {Link, NavLink} from "react-router-dom";
import './navStyle.css'

const Navigation = () => {
  const checkActive = (match, location) => {
    if(!location) return false;
    const {pathname} = location;
    return pathname === "/";
  }
  return(
    <nav className='nav_bar'>
      <ul className='header'>
        <li >
          <NavLink activeClassName='active' isActive={checkActive} className='header_link' to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='header_link' to="/about">About</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='header_link' to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='header_link' to="/contact">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default React.memo(Navigation)