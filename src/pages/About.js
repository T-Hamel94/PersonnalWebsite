import '../styles/pages/About.css';
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t } = useTranslation('about');

    return (
      <div>
        <div id="About" class="row ">
          <div class="col-12 m-0 p-0">
            <h1 id="mainHeader">{t('about_header')}</h1>
          </div>
        </div>

        <div class='container mt-3 mb-2'>
          <div class='row'>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <p class="justify"> I am Tristan Hamel, a passionate of IT, I am particulary intersted in backend developement, DevOps and network infrastructure. I also have a bachelor's degree in industrial relations from University Laval </p>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 text-center">
              IMG HERE 1
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <p class="justify">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 text-center">
              IMG HERE 2
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <p class="justify">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 text-center">
              IMG HERE 3
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <p class="justify">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 text-center">
              IMG HERE 4
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <p class="justify"> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;