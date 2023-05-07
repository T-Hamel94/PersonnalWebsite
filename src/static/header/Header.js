import '../../styles/static/NavBar.css';
import MainLogo from './MainLogo';
import NavBar from './NavBar';
import LanguageSwitch from './LanguageSwitch';
 
function Header() {
    return (
        <div class="row" id="navContainer">

            <div class="col-md-6 col-sm-12 col-lg-4" id="logoContainer">
                <MainLogo> </MainLogo>
            </div>

            <nav class="col-md-6 col-sm-12 col-lg-4" id="nav">
                <NavBar> </NavBar>
            </nav>

            <div className="col-md-12 col-sm-12 col-lg-4" id="languageContainer">
                <LanguageSwitch> </LanguageSwitch>
            </div>

        </div>
    );
}

export default Header;