import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export function useDeleteUser() {
  const { t } = useTranslation('profile');

  const deleteUser = useCallback(async (id) => {
    try {
      await axios.delete(`https://localhost:7057/api/users/${id}`);
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
