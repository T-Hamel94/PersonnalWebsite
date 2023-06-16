import '../../styles/static/NavBar.css';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const { t } = useTranslation('navbar');

    return (
        <ul className="row">
            <li className="col-lg-1 col-md-1 col-sm-12">
                <NavLink exact to="/" activeclassname="active">{t('home')}</NavLink>
            </li>
            <li className="col-lg-1 col-md-1 col-sm-12">
                <NavLink to="/blogs" activeclassname="active">{t('blog')}</NavLink>
            </li>
            <li className="col-lg-1 col-md-1 col-sm-12">
                <NavLink to="/about" activeclassname="active">{t('about')}</NavLink>
            </li>
            <li className="col-lg-1 col-md-1 col-sm-12">
                <NavLink to="/contact" activeclassname="active">{t('contact')}</NavLink>
            </li>
        </ul>
    );
}

export default NavBar;
