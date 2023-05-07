import '../styles/pages/About.css';
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t } = useTranslation('about');

    return (
      <div id="About" class="row">
        <div class="col-12">
          <h1 id="mainHeader">{t('about_header')}</h1>
        </div>

        <div class="col-4">
          <p> I am Tristan Hamel, a passionate of IT, I am particulary intersted in backend developement, DevOps and network infrastructure. I also have a bachelor's degree in industrial relations from University Laval </p>
        </div>
        <div class="col-4">
        </div>
        <div class="col-4">
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </div>

        <div class="col-4">
        </div>
        <div class="col-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
        <div class="col-4">
        </div>

        <div class="col-4">
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </div>
        <div class="col-4">
        </div>
        <div class="col-4">
          <p> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
      </div>
    );
  };
  
  export default About;