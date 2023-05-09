import './../styles/pages/Contact.css'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('contact');

    return (
        <div id="contact">

            <div class="row m-0 p-0">
              <div class="col-12 text-center m-0 p-0">
                <h1 id="contactHeader">{t('contact_header')}</h1>
              </div>
            </div>

          <div className='container'>
            <div class="row" id="contactContent">
              <div class="col-12">
                <h3 id="contentHeader">
                  {t('content_header1')} <a href="mailto:Tristan_Hamel@hotmail.com">Tristan_Hamel@hotmail.com</a> 
                  {t('content_header2')} <a href="https://www.linkedin.com/in/tristan-hamel-qcca">Linked In</a>
                  {t('content_header3')}
                </h3>
              </div>
            </div>
          </div>

        </div>
      );
  };
  
  export default Contact;