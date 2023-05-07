import '../../styles/static/NavBar.css';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const { t } = useTranslation('navbar');

    return (
        <ul class="row">
            <li class="col-lg-1 col-md-1 col-sm-12">
                <NavLink exact to="/" activeClassName="active">{t('home')}</NavLink>
            </li>
            <li class="col-lg-1 col-md-1 col-sm-12">
                <NavLink to="/blogs" activeClassName="active">{t('blog')}</NavLink>
            </li>
            <li class="col-lg-1 col-md-1 col-sm-12">
                <NavLink to="/about" activeClassName="active">{t('about')}</NavLink>
            </li>
            <li class="col-lg-1 col-md-1 col-sm-12">
                <NavLink to="/contact" activeClassName="active">{t('contact')}</NavLink>
            </li>
        </ul>
    );
}

export default NavBar;
