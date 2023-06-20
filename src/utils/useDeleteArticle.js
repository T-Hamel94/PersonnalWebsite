import { useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export function useDeleteArticle() {
  const { t } = useTranslation('article');
  const apiUrl = process.env.REACT_APP_API_URL;

  const deleteArticle = useCallback(async (id) => {
    const token = localStorage.getItem('authToken');
    
    try {
      await axios.delete(`${apiUrl}/blogposts/${id}`, {
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

  return deleteArticle;
}
