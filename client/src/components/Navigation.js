import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';


const Navigation = props => {

  const [input, setInput] = useState('')
  const [options, setOptions] = useState()

  const handleSearch = async (e) => {
    setInput(e.target.value)
    setOptions([])
    const searchStr = e.target.value;
    const data = await fetch(`/api/products/search/${searchStr}`)
    if (data.ok) {
      const dealerList = await data.json()
      setOptions(dealerList.dealerships)
    }
  }

  return (
    <>
      <header className='navigation-container'>
        <a href='/'>
          <img
            alt='UpwardLogo'
            className='UpwardLogo' src='/images/UPWARDLogo.jpg' />
        </a>
        <NavLink to="/" activeClassName="active">PRODUCTS</NavLink>
        <div className="navlink-container__search">
          <div className="navlink-container__search-input">
            <input type="search" onChange={handleSearch} value={input} placeholder="Search" autoComplete="off"></input>
          </div>
          <div className="navlink-container__search-choices">
            {options ? options.map(option =>
              <div className="navlink-container__search-choices-div" key={option.id}>
                <a className="navlink-container__search-options" href={`/dealership/${option.id}`}>{option.name}</a>
              </div>
            ) : null}
          </div>
        </div>
        <NavLink to='/categories' activeClassName="active">CATEGORIES</NavLink>
        <NavLink to="/login" activeClassName="active">LOG IN</NavLink>
        <NavLink to="/signup" activeClassName="active">SIGN UP</NavLink>
      </header>
    </>
  );

}


export default Navigation;
