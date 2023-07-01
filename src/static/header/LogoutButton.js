import 'react-toastify/dist/ReactToastify.css';
import {useLogout} from '../../utils/Logout.js'
import { useTranslation } from 'react-i18next';

function LogoutButton() {
  const logout = useLogout();
  const { t } = useTranslation('logout');

  return (
    <button className="no-style-btn" onClick={logout}>{t('logout')}</button>
  );
}

export default LogoutButton;