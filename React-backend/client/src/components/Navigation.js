import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props =>
  <header>
    <NavLink to="/">Products</NavLink>
    <span>&nbsp;</span>
    <NavLink to="/login">Login</NavLink>
  </header>
  ;

export default Navigation;
