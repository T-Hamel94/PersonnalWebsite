import '../../styles/static/NavBar.css';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const { t } = useTranslation('navbar');

    return (
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="active">{t('home')}</NavLink>
            </li>
            <li>
                <NavLink to="/blogs" activeClassName="active">{t('blog')}</NavLink>
            </li>
            <li>
                <NavLink to="/about" activeClassName="active">{t('about')}</NavLink>
            </li>
            <li>
                <NavLink to="/contact" activeClassName="active">{t('contact')}</NavLink>
            </li>
        </ul>
    );
}

export default NavBar;
