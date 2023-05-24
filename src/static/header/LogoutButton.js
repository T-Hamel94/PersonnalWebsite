import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LogoutButton() {
  function logout() {
    localStorage.removeItem('authToken');
    toast("Logout successful!", {
      autoClose: 4000, 
      hideProgressBar: true, 
      onClose: () => {
        setTimeout(() => {
          window.location.reload();
        }, 2000); 
      }
    });
  }

  return (
    <button className="no-style-btn" onClick={logout}>Logout</button>
  );
}
