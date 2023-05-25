import '../../styles/static/UserStatus.css';
import LogoutButton from './LogoutButton';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import jwt from 'jwt-decode';

function UserStatus({ username, setUsername }) {
  const {t} = useTranslation('login');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log('looking for a token');
    if (token) {
      console.log('there is a token');
      const parsedToken = jwt(token);
      if (parsedToken) {
        setUsername(parsedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
      }
    }
  }, []);

  return (
    <div>
      {
        username ?
        <div className="d-flex align-items-center">   
          <div className='header-pill'>
            <NavLink to="/myprofile"> {username} </NavLink>
          </div>

          <div className='header-pill'>
            <LogoutButton></LogoutButton>
          </div>
        </div>  
        :
        <>
          <div id='userStatus'>
            <NavLink to="/login" activeClassName="active" className='custom-btn'>{t("login")} </NavLink>
          </div>
        </>
      }
    </div>
  );
}

export default UserStatus;
