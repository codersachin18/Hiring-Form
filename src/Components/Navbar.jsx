import React, { useState } from 'react'
import './Navbar.css'

export const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <div className="navbars">
        <div className="logo">
          <h1>HIRING FORM</h1>
        </div>
        <button className="nav-toggle" onClick={toggleNavVisibility}>
          ☰
        </button>
        <div className={`navs ${isNavVisible ? 'nav-visible' : ''}`}>
          <ul>
          <button className="nav-toggle" onClick={toggleNavVisibility}> X
          </button>

            <li className="navs1">HOME</li>
            <li className="navs1">ABOUT</li>
            <li className="navs1">CONTACT US</li>
            <li className="navs1">HELP</li>
            <a href="login.html"><button className='btn1'>LOGIN</button></a>
          </ul>
        </div>
      </div>
    </>
  );
};