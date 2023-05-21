import '../styles/pages/Login.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Login() {
  const [state, setState] = useState({ email: '', password: '' });
  const { t } = useTranslation('login');

  function handleInputChange(event) {
    setState({...state, [event.target.name]: event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
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