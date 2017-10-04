import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => (
  <ul className="nav">
    <li>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/rooms">
        Room Availability
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/maintenance">
        Maintenance
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/lockup">
        Lock Up
      </NavLink>
    </li>
  </ul>
);

export default Nav;
