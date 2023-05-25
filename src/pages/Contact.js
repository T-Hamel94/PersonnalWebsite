import './../styles/pages/Contact.css'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('contact');

    return (
        <div id="contact">

          <div class="row m-0 p-0">
            <div class="col-12 text-center m-0 p-0">
              <h1 className='page-header' id="contactHeader">{t('contact_header')}</h1>
            </div>
          </div>

          <div class="row contactText m-0">
            <div class="col-12 ">
              <p>{t("contact_description")}</p>
            </div>
          </div>

          <div className='container'>

            <div class="row contactContent d-flex justify-content-between">
              <div class="col-6">
                <h4>
                  <a href="mailto:Tristan_Hamel@hotmail.com">Tristan_Hamel@Hotmail.com</a> 
                </h4>
              </div>
              <div class="col-6 d-flex justify-content-end">
                <img src={process.env.PUBLIC_URL + "/logo/emailLogo.png"} class="contactLogo"></img>
              </div>
            </div>

            <div class="row contactContent d-flex justify-content-between">
              <div class="col-6 ">
                <h4>
                  <a href="https://www.linkedin.com/in/tristan-hamel-qcca">Linked In</a> 
                </h4>
              </div>
              <div class="col-6 d-flex justify-content-end">
                <img src={process.env.PUBLIC_URL + "/logo/LI-In-Bug.png"} class="contactLogo"></img>
              </div>
            </div>

            <div class="row contactContent d-flex justify-content-between">
              <div class="col-6">
                <h4>
                  <b>{t("contact_location")} </b>{t("contact_location2")}
                </h4>
              </div>
              <div class="col-6 d-flex justify-content-end">
              <img src={process.env.PUBLIC_URL + "/logo/locationLogo.png"} class="contactLogo"></img>
              </div>
            </div>

            <div class="row contactContent d-flex justify-content-between">
              <div class="col-6">
                <h4>
                  <b>{t("contact_language")}</b> {t("contact_language2")}
                </h4>
              </div>
              <div class="col-6 d-flex justify-content-end">
                <img src={process.env.PUBLIC_URL + "/logo/languageLogo.png"} class="contactLogo"></img>
              </div>
            </div>


          </div>

        </div>
      );
  };
  
  export default Contact;