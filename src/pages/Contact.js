import './../styles/pages/Contact.css'
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

const Contact = () => {
  const { t } = useTranslation('contact');

    return (
        <div id="contact">
          <div className='container'>

            <div class="row">
              <div class="col-12 text-center">
                <h1 id="mainHeader">{t('contact_header')}</h1>
              </div>
            </div>
            
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