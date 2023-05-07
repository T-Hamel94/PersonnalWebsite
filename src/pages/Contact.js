import './../styles/pages/Contact.css'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('contact');

    return (
        <div id="contact" class="row">
          <div class="col-12 text-center">
            <h1 id="mainHeader">{t('contact_header')}</h1>
          </div>
          <div class="col-12">
            <h3 id="contentHeader">You can reach me by email at <a href="mailto:Tristan_Hamel@hotmail.com">Tristan_Hamel@hotmail.com</a> or by my <a href="https://www.linkedin.com/in/tristan-hamel-qcca">Linked In</a> account and it will be my pleasure to answer question you may have or to discuss with you about opportunities  </h3>
          </div>
        </div>
      );
  };
  
  export default Contact;