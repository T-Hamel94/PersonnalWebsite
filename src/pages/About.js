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

            <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <p class="justify-text"> {t("about_intro")} </p>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <img id="headshot" src={process.env.PUBLIC_URL + '/image/headshot.JPG'} alt="HeadShot"></img>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <p class="justify-text"> {t("about_education")} </p>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <img id="headshot" src={process.env.PUBLIC_URL + '/logo/UlavalLogo.png'} alt="UnivLogo"></img>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <p class="justify-text"> {t("about_RQ_job")} </p>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
            <img id="headshot" src={process.env.PUBLIC_URL + '/logo/CegepStFoyLogo.png'} alt="CegepLogo"></img>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <p class="justify-text"> {t("about_RQ_prog")} </p>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center mb-4">
              <img id="headshot" src={process.env.PUBLIC_URL + '/image/network.PNG'} alt="NetworkLogo"></img>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <p class="justify-text"> {t("about_passion")}</p>
            </div>

          </div>
        </div>
      </div>
    );
  };
  
  export default About;