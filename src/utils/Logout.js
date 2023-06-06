import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export function useLogout() {
  const navigate = useNavigate();
  const { t } = useTranslation('logout');
  const { setUser } = useContext(UserContext); 

  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    setUser(null);
    toast.success(t('logout_success'), {
      autoClose: 4000,
      hideProgressBar: true,
    });
  }, [navigate, setUser]);  

  return logout;
}