import '../../styles/static/UserStatus.css';
import LogoutButton from './LogoutButton';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../contexts/UserContext'

function UserStatus() {
  const {t} = useTranslation('login');
  const { user, setUser} = useContext(UserContext);

  useEffect(() => {
    
  }, []);

  return (
    <div>
      {
        user && user.username ?
        <div className="d-flex align-items-center">   
          <div className='header-pill'>
            <NavLink to="/myprofile"> {user.username } </NavLink>
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
