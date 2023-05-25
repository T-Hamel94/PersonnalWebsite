import '../styles/pages/profile.css';
import React from 'react';

function Profile() {
  return (
    <div>

      <div class="row m-0 p-0">
        <div class="col-12 text-center m-0 p-0">
          <h1 className='page-header' id='profileHeader'> My Profile</h1>
        </div>
      </div>

      <div className='container'>

        <div className='row text-center' id='userOptions'>
          <div className='col-6'>
            <h2 className='user-profile-options' id='postArticle'>Post a new article</h2>
          </div>
          <div className='col-6'>
            <h2 className='user-profile-options' id='deleteAccount'>Delete my account</h2>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile;
