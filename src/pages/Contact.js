import './../styles/pages/Contact.css'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('contact');

    return (
        <div id="contact">

          <div className="row m-0 p-0">
            <div className="col-12 text-center m-0 p-0">
              <h1 className='page-header' id="contactHeader">{t('contact_header')}</h1>
            </div>
          </div>

          <div className="row contactText m-0">
            <div className="col-12 ">
              <p>{t("contact_description")}</p>
            </div>
          </div>

          <div className='container'>

            <div className="row contactContent d-flex justify-content-between">
              <div className="col-6">
                <h4>
                  <a href="mailto:Tristan_Hamel@hotmail.com">Tristan_Hamel@Hotmail.com</a> 
                </h4>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <img src={process.env.PUBLIC_URL + "/logo/emailLogo.png"} className="contactLogo"></img>
              </div>
            </div>

            <div className="row contactContent d-flex justify-content-between">
              <div class="col-6 ">
                <h4>
                  <a href="https://www.linkedin.com/in/tristan-hamel-qcca" target='_new'>Linked In</a> 
                </h4>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <img src={process.env.PUBLIC_URL + "/logo/LI-In-Bug.png"} className="contactLogo"></img>
              </div>
            </div>

            <div className="row contactContent d-flex justify-content-between">
              <div class="col-6 ">
                <h4>
                  <a href="https://www.chess.com/member/t_hamel" target='_new'>{t("contact_chess")}</a> 
                </h4>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <img src={process.env.PUBLIC_URL + "/logo/chessdotcom.png"} className="contactLogo"></img>
              </div>
            </div>

            <div className="row contactContent d-flex justify-content-between">
              <div className="col-6">
                <h4>
                  <b>{t("contact_location")} </b>{t("contact_location2")}
                </h4>
              </div>
              <div className="col-6 d-flex justify-content-end">
              <img src={process.env.PUBLIC_URL + "/logo/locationLogo.png"} className="contactLogo"></img>
              </div>
            </div>

            <div className="row contactContent d-flex justify-content-between">
              <div className="col-6">
                <h4>
                  <b>{t("contact_language")}</b> {t("contact_language2")}
                </h4>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <img src={process.env.PUBLIC_URL + "/logo/languageLogo.png"} className="contactLogo"></img>
              </div>
            </div>

          </div>

        </div>
      );
  };
  
  export default Contact;