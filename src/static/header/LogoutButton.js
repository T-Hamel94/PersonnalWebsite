import React from 'react';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export default function LogoutButton() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('authToken');
    toast.success("Logout successful!", {
      autoClose: 4000, 
      hideProgressBar: true, 
      onClose: () => {
        setTimeout(() => {
          navigate('/');
          window.location.reload();
        }, 2000); 
      }
    });
  }

  return (
    <button className="no-style-btn" onClick={logout}>Logout</button>
  );

}
