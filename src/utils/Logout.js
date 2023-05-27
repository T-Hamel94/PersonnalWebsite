import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export function useLogout() {
  const navigate = useNavigate();
  const { t } = useTranslation('logout');

  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    toast.success(t('logout_success'), {
      autoClose: 4000,
      hideProgressBar: true,
      onClose: () => {
        setTimeout(() => {
          navigate('/');
          window.location.reload();
        }, 2000);
      }
    });
  }, [navigate]);

  return logout;
}
