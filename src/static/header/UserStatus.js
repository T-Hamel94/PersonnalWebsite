import '../../styles/static/UserStatus.css';
import { NavLink } from 'react-router-dom';
import React from 'react'

function UserStatus() {
  return (
    <div id='userStatus'> 
      <NavLink to="/login" activeClassName="active" className='custom-btn'>Login</NavLink>
    </div>
  )
}

export default UserStatus;
