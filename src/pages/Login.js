import '../styles/pages/Login.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import jwt from 'jwt-decode';
import { toast } from 'react-toastify';
import { useFetchUserData } from '../utils/useFetchUserData';

function Login() {
  const [state, setState] = useState({ 
      email: '',
      password: ''
    });
  const { t } = useTranslation('login');
  const navigate = useNavigate();
  const fetchUserData = useFetchUserData();

  function handleInputChange(event) {
    setState({...state, [event.target.name]: event.target.value});
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post('https://localhost:7057/api/auth/login', {
        email: state.email,
        password: state.password
      });
      if (response.status === 200 && response.data) {
        console.log('adding to the local storage...');
        localStorage.setItem('authToken', response.data);
        const parsedToken = jwt(response.data);
        console.log(parsedToken);
        if (parsedToken) {
          fetchUserData();
          toast.success(`${t('login_successful') } ${parsedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]}!`, {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: true,
          });
        }

        navigate('/myprofile');
      }
    } catch (error) {
      toast.error(t('login_failed'), {autoClose: 2500}) ;
      console.log('There has been an error:' + error)
    }
  }
  

  return (
    <div id='loginBackground'>
      <div id="loginContainer">

        <div class="row">
          <div class="col-12 text-center mt-3">
            <h1>{t("login_header")}</h1>
          </div>
        </div>

        <div className='row'>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">{t("login_email")}</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={state.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">{t("login_password")}</label>
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
                <button type="submit" className="btn btn-primary w-25 p-2">{t("login_submit")}</button>
              </div>
            </div>
          </form>
        </div>

        <div className='row' id='registerLink'>
          <div className='col-12 text-center'>
            <p>{t("login_register")} <a href='/register'>{t("login_clickHere")}</a> </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login;