import '../styles/pages/profile.css';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useLogout } from '../utils/Logout';
import { useDeleteUser } from '../utils/useDeleteUser';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/useAuth';
import ConfirmationModal from '../components/ConfirmationModal';
import { RotatingLines } from 'react-loader-spinner';

function Profile() {
  const isAuth = useAuth();
  const { user, setUser } = useContext(UserContext); 
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { t } = useTranslation('profile');
  const navigate = useNavigate();
  const logout = useLogout();
  const deleteUser = useDeleteUser();

  const handleDeleteAccount = () => {
    setShowConfirmation(false);
    console.log('deleting account');
    try{
      deleteUser(user.id);
      setTimeout(logout, 2000);
    }
    catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    if(isAuth === false){
      navigate('/');
    }
  }, [user, isAuth]);

  if (!user || !user.username){
    return (
      <>
      <div className='row'> 
        <div className='col d-flex justify-content-center align-items-center py-5'>
          <RotatingLines
            strokeColor="grey"
            animationDuration="1.1"
            strokeWidth="3"
            height={100}
            width={100}
            timeout={3000} 
          />
        </div>
      </div>
      </>
    );
  }

  return (
    <div>
      <div className="row m-0 p-0">
        <div className="col-12 text-center m-0 p-0">
          <h1 className="page-header" id="profileHeader">{t('profile_header')}</h1>
        </div>
      </div>

      <div className="container">
        <div className="row text-center mt-1 pb-2" id="userOptions">
          <div className="col-4">
            <h2 className="user-profile-options btn w-75" id="postArticle" onClick={() => navigate(`/createArticle/${user.username}`)}>{t('profile_post')}</h2>
          </div>
          <div className="col-4">
            <h2 className="user-profile-options btn w-75" id="manageArticles" onClick={() => navigate(`/myarticle/${user.username}`)}>{t('profile_manageArticles')}</h2>
          </div>
          <div className="col-4">
            <h2 className="user-profile-options btn w-75" id="deleteAccount" onClick={() => setShowConfirmation(true)}>{t('profile_delete')}</h2>
          </div>
        </div>

        <table className="table table-profile mt-3 mb-3">
          <tbody>
            <tr>
              <th><b>{t('profile_tableHeader')}</b></th>
            </tr>
            <tr>
              <td><b>{t('profile_firstname')}</b></td>
              <td>{user && user.firstName}</td>
            </tr>
            <tr>
              <td><b>{t('profile_lastname')}</b></td>
              <td>{user && user.lastName}</td>
            </tr>
            <tr>
              <td><b>{t('profile_username')}</b></td>
              <td>{user && user.username}</td>
            </tr>
            <tr>
              <td><b>{t('profile_email')}</b></td>
              <td>{user && user.email}</td>
            </tr>
            <tr>
              <td><b>{t('profile_birthdate')}</b></td>
              <td>{new Date(user && user.birthdate).toDateString()}</td>
            </tr>
          </tbody>
        </table>

        <ConfirmationModal
          show={showConfirmation}
          onHide={() => setShowConfirmation(false)}
          onConfirm={handleDeleteAccount}
          message={t('profile_deleteconfirmation')}
          action={t('profile_delete')}
        />

      </div>
    </div>
  );
}

export default Profile;
