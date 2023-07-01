import React from 'react'
import { NavLink } from 'react-router-dom';

function MainLogo() {
  return (
     <NavLink to='/'><img id="logo" src='/logo/BasicLogo.png' alt="Tristan Hamel Logo"></img></NavLink>
  )
}

export default MainLogo;
