import { useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export function useApproveArticle() {
  const { t } = useTranslation('article');
  const apiUrl = process.env.REACT_APP_API_URL;

  const approveArticle = useCallback(async (articleID) => {
    const token = localStorage.getItem('authToken');

    try {
      const response = await axios.put(`${apiUrl}/blogposts/approve/${articleID}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if(response.status === 200) {
        toast.success(t('approvearticle_success'), {
          autoClose: 4000,
          hideProgressBar: true,
        });
        
        return true;
      }
      throw new Error('Article creation failed');
    } catch (error) {
      toast.error(t('approvearticle_failure'), {
        autoClose: 4000,
        hideProgressBar: true,
      });

      return false;
    }
  }, []);

  return approveArticle;
}
