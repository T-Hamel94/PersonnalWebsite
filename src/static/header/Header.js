import '../../styles/static/NavBar.css';
import MainLogo from './MainLogo';
import NavBar from './NavBar';
import LanguageSwitch from './LanguageSwitch';
 
function Header() {
    return (
        <div class="row" id="navContainer">

            <div class="col-12 col-sm-4">
                <MainLogo> </MainLogo>
            </div>

            <nav class="col-12 col-sm-4" id="nav">
                <NavBar> </NavBar>
            </nav>

            <div className="col-12 col-sm-4" id="language">
                <LanguageSwitch> </LanguageSwitch>
            </div>

        </div>
    );
}

export default Header;