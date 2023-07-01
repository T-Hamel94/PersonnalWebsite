import '../../styles/static/UserStatus.css';
import React, { useEffect, useContext } from 'react';
import LogoutButton from './LogoutButton';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../utils/useAuth';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../contexts/UserContext'

function UserStatus() {
  const {t} = useTranslation('login');
  const { user } = useContext(UserContext);
  const isAuth = useAuth();

  useEffect(() => {
  }, [user]);

  return (
    <div>
      {
        isAuth != false ?
        <div className="d-flex align-items-center">   
          <div className='header-pill'>
            <NavLink to="/myprofile"> {user?.username ?? 'userNotFound' } </NavLink>
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
