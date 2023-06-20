import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export function useDeleteUser() {
  const { t } = useTranslation('profile');

  const deleteUser = useCallback(async (id) => {
    const token = localStorage.getItem('authToken');
    const apiUrl = process.env.REACT_APP_API_URL;
    
    try {
      await axios.delete(`${apiUrl}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success(t('delete_success'), {
        autoClose: 4000,
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error(t('delete_failed'), {
        autoClose: 4000,
        hideProgressBar: true,
      });
    }
  }, []);

  return deleteUser;
}
