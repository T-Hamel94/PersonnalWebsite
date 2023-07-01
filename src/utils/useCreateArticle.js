import { useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export function useCreateArticle() {
  const { t } = useTranslation('article');
  const apiUrl = process.env.REACT_APP_API_URL;

  const createArticle = useCallback(async (user, articleData) => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.post(`${apiUrl}/blogposts`, articleData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });   
      if(response.status === 201) {
        if (!user.isAdmin)
        toast.success(t('createarticle_success_notadmin'), {
          autoClose: 4000,
          hideProgressBar: true,
        });
        else{
          toast.success(t('createarticle_success'), {
            autoClose: 4000,
            hideProgressBar: true,
          });
        }
        
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
