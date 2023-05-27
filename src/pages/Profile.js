import React, { useState } from 'react';
import ConfirmationModal from '../components/ConfirmationModal';
import { useLogout } from '../utils/Logout';
import { useTranslation } from 'react-i18next';
import '../styles/pages/profile.css';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { t } = useTranslation('profile');
  const navigate = useNavigate();
  const logout = useLogout();

  const handleDeleteAccount = () => {
    setShowConfirmation(false);
    console.log('deleting account');
    logout();
  };

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
            <h2 className="user-profile-options btn w-75" id="postArticle" onClick={() => navigate('/createArticle')}>{t('profile_post')}</h2>
          </div>
          <div className="col-4">
            <h2 className="user-profile-options btn w-75" id="manageArticles">{t('profile_manageArticles')}</h2>
          </div>
          <div className="col-4">
            <h2 className="user-profile-options btn w-75" id="deleteAccount" onClick={() => setShowConfirmation(true)}>{t('profile_delete')}</h2>
          </div>
        </div>

        <table className="table table-bordered table-striped mt-3">
          <tbody>
            <tr>
              <th>{t('profile_tableHeader')}</th>
            </tr>
            <tr>
              <td>{t('profile_username')}</td>
              <td>JohnDoe</td>
            </tr>
            <tr>
              <td>{t('profile_email')}</td>
              <td>coolguy69@gmail.com</td>
            </tr>
            <tr>
              <td>{t('profile_location')}</td>
              <td>New York, USA</td>
            </tr>
          </tbody>
        </table>

        <ConfirmationModal
          show={showConfirmation}
          onHide={() => setShowConfirmation(false)}
          onConfirm={handleDeleteAccount}
          message="Are you sure you want to delete your account?"
          action="Delete"
        />

      </div>
    </div>
  );
}

export default Profile;
