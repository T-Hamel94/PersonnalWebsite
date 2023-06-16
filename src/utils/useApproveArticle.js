import { useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export function useApproveArticle() {
  const { t } = useTranslation('article');

  const approveArticle = useCallback(async (articleID) => {
    const token = localStorage.getItem('authToken');

    try {
      const response = await axios.put(`https://localhost:7057/api/blogposts/approve/${articleID}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if(response.status === 200) {
        toast.success('Article was approved with success', {
          autoClose: 4000,
          hideProgressBar: true,
        });
        
        return true;
      }

      throw new Error('Article creation failed');
    } catch (error) {
      toast.error('Article approval failed miserably', {
        autoClose: 4000,
        hideProgressBar: true,
      });

      return false;
    }
  }, []);

  return approveArticle;
}
