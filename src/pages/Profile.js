import '../styles/pages/profile.css';
import React, { useState, useEffect } from 'react';
import { useLogout } from '../utils/Logout';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../components/ConfirmationModal';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

function Profile() {
  const [user, setUser] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { t } = useTranslation('profile');
  const navigate = useNavigate();
  const logout = useLogout();

  const handleDeleteAccount = () => {
    setShowConfirmation(false);
    console.log('deleting account');
    // Ajouter Logic de suppression icitttte
    logout();
  };

  async function fetchUserData() {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      const decodedToken = jwt_decode(authToken);
      const userId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      
      const response = await axios.get(`https://localhost:7057/api/Users/userID?userID=${userId}`);
      if (response.status === 200 && response.data) {
        setUser(response.data);
      }
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

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
              <td>{user.firstName}</td>
            </tr>
            <tr>
              <td><b>{t('profile_lastname')}</b></td>
              <td>{user.lastName}</td>
            </tr>
            <tr>
              <td><b>{t('profile_username')}</b></td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td><b>{t('profile_email')}</b></td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td><b>{t('profile_birthdate')}</b></td>
              <td>{new Date(user.birthdate).toDateString()}</td>
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
