import '../styles/pages/Register.css';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {
    const [state, setState] = useState({ 
      email: '', 
      password: '', 
      firstName: '', 
      lastName: '', 
      birthdate: '',
      username: ''
    });
    const { t } = useTranslation('register');
    const navigate = useNavigate();

    function handleInputChange(event) {
        setState({...state, [event.target.name]: event.target.value});
    }
    
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        const response = await axios.post('https://localhost:7057/api/users/register', {
          firstName: state.firstName,
          lastName: state.lastName,
          username: state.username,
          password: state.password,
          email: state.email,
          birthdate: state.birthdate
        });
        console.log(response.data);

        if(response.status === 201){
          toast.success(`Creation of account was sucessful!`, {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: true,
          });

          navigate('/login');
        }
      } catch (error) {
        toast.error(`Oops! There was an error when trying to register a new user. Please try again later.`, {
          position: 'top-center',
          autoClose: 2500,
          hideProgressBar: true,
        });
        console.error('There was an error!', error);
      }
  }

  return (
    <div id='registerBackground'>
    <div id="registerContainer">

      <div class="row">
        <div class="col-12 text-center mt-3">
          <h1>{t("register_header")}</h1>
        </div>
      </div>

      <div className='row'>
        <form onSubmit={handleSubmit}>

          <div className='row'>
            <div className="mb-3 col-lg-6 col-md-12">
                <label htmlFor="firstName" className="form-label">{t("register_firstname")}</label>
                <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={state.firstName}
                onChange={handleInputChange}
                required
                />
            </div>

            <div className="mb-3 col-lg-6 col-md-12">
                <label htmlFor="lastName" className="form-label">{t("register_lastname")}</label>
                <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={state.lastName}
                onChange={handleInputChange}
                required
                />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="birthdate" className="form-label">{t("register_birthdate")}</label>
            <input
              type="date"
              className="form-control"
              id="birthdate"
              name="birthdate"
              value={state.birthdate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">{t("register_username")}</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={state.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">{t("register_email")}</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={state.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">{t("register_password")}</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={state.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='row'>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary w-25 p-2">{t("register_btn")}</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
  )
}

export default Register;