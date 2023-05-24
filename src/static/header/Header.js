import '../../styles/static/NavBar.css';
import MainLogo from './MainLogo';
import NavBar from './NavBar';
import LanguageSwitch from './LanguageSwitch';
import UserStatus from './UserStatus';
import { ToastContainer } from 'react-toastify';
 
function Header({ username, setUsername }) {
    return (
        <div class="row" id="navContainer">

            <ToastContainer position='top-center'></ToastContainer>

            <div class="col-md-3 col-sm-12 col-lg-4" id="logoContainer">
                <MainLogo> </MainLogo>
            </div>

            <nav class="col-md-6 col-sm-12 col-lg-4" id="nav">
                <NavBar> </NavBar>
            </nav>
            
            <div className="col-md-3 col-sm-12 col-lg-4" id="languageContainer">
                <UserStatus username={username} setUsername={setUsername}></UserStatus>
                <LanguageSwitch> </LanguageSwitch>
            </div>

        </div>
    );
}

export default Header;
