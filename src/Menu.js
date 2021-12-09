import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
       <ul>
          <li><Link to="/">MAIN</Link></li>
          <li><Link to="/login">LOGIN </Link> </li>
          <li><Link to="/profile">PROFILE</Link></li>
       </ul>
    </>
  );
}

export default Menu;
