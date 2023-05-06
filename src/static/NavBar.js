import '../styles/NavBar.css';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const { t, i18n } = useTranslation();

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
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" activeClassName="active">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
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
