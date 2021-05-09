import * as React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
  return(
    <nav className='nav_bar'>
      <ul className='header'>
        <li >
          <Link className='header_link' to="/">Home</Link>
        </li>
        <li>
          <Link className='header_link' to="/about">About</Link>
        </li>
        <li>
          <Link className='header_link' to="/blog">Blog</Link>
        </li>
        <li>
          <Link className='header_link' to="/contact">Contacts</Link>
        </li>
      </ul>
    </nav>
  )
}

export default React.memo(Navigation)