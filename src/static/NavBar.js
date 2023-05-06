import '../styles/static/NavBar.css';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const { t } = useTranslation('navbar');
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <div class="row" id="navContainer">

            <div class="col-12 col-sm-4">
                <img id="logo" src='/logo/BasicLogo.png' alt="Tristan Hamel Logo"></img>
            </div>

            <nav class="col-12 col-sm-4" id="nav">
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
            </nav>

            <div className="col-12 col-sm-4" id="language">
                <button
                    onClick={() => changeLanguage('en')}
                    className={i18n.language === 'en' ? 'selectedLanguage' : ''}
                > EN</button>
                <span>/</span>
                <button
                    onClick={() => changeLanguage('fr')}
                    className={i18n.language === 'fr' ? 'selectedLanguage' : ''}
                >FR </button>
            </div>


        </div>
    );
}

export default NavBar;
