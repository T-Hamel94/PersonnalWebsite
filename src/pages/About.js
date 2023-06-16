import '../styles/pages/About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');
    return (
      <div>

        <div id="About" class="row ">
          <div className="col-12 m-0 p-0">
            <h1 className='page-header' id="mainHeader">{t('about_header')}</h1>
          </div>
        </div>

        <div className='container mt-3 mb-2'>
          <div className='row'>

            <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <p className="justify-text"> {t("about_intro")} </p>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <img id="headshot" src={process.env.PUBLIC_URL + '/image/headshot.JPG'} alt="HeadShot"></img>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <p className="justify-text"> {t("about_education")} </p>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <img id="headshot" src={process.env.PUBLIC_URL + '/logo/UlavalLogo.png'} alt="UnivLogo"></img>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <p className="justify-text"> {t("about_RQ_job")} </p>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
            <img id="headshot" src={process.env.PUBLIC_URL + '/logo/CegepStFoyLogo.png'} alt="CegepLogo"></img>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <p className="justify-text"> {t("about_RQ_prog")} </p>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center mb-4">
              <img id="headshot" src={process.env.PUBLIC_URL + '/image/network.PNG'} alt="NetworkLogo"></img>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex align-items-center">
              <p className="justify-text"> {t("about_passion")}</p>
            </div>

          </div>
        </div>
      </div>
    );
  };
  
  export default About;