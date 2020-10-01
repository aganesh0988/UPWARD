import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = props =>
  <header className='navigation-container'>
    <NavLink to="/" activeClassName="active">HOME</NavLink>
    <NavLink to="/users" activeClassName="active">USERS</NavLink>
    <NavLink to="/login" activeClassName="active">LOG IN</NavLink>
    <NavLink to="/signup" activeClassName="active">SIGN UP</NavLink>
  </header>
  ;




export default Navigation;
