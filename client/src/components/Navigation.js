import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';


const Navigation = props =>
  <header className='navigation-container'>
    <a href='/'>
      <img
        alt='UpwardLogo'
        className='UpwardLogo' src='/images/UPWARDLogo.jpg' />
    </a>
    <NavLink to="/" activeClassName="active">HOME</NavLink>
    {/* <NavLink to="/users" activeClassName="active">USERS</NavLink> */}
    <NavLink to="/login" activeClassName="active">LOG IN</NavLink>
    <NavLink to="/signup" activeClassName="active">SIGN UP</NavLink>
    <NavLink to='/categories' activeClassName="active">CATEGORIES</NavLink>
  </header>
  ;




export default Navigation;
