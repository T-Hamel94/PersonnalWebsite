import { useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export function useCreateArticle() {
  const { t } = useTranslation('article');

  const createArticle = useCallback(async (articleData) => {
    const token = localStorage.getItem('authToken');

    try {
      const response = await axios.post('https://localhost:7057/api/blogposts', articleData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if(response.status === 201) {
        toast.success(t('createarticle_success'), {
          autoClose: 4000,
          hideProgressBar: true,
        });
        
        return true;
      }

      throw new Error('Article creation failed');
    } catch (error) {
      toast.error(t('createarticle_failed'), {
        autoClose: 4000,
        hideProgressBar: true,
      });
      
      console.error('CreateArticle error', error);
      return false;
    }
  }, []);

  return createArticle;
}
