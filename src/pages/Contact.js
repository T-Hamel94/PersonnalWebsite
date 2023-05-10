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

            <div class="row contactContent">
              <div class="col-12">
                <h4>
                  Email: <a href="mailto:Tristan_Hamel@hotmail.com">Tristan_Hamel@hotmail.com</a> 
                </h4>
              </div>
            </div>

            <div class="row contactContent">
              <div class="col-12">
                <h4>
                  Linked In: <a href="https://www.linkedin.com/in/tristan-hamel-qcca">Tristan Hamel</a> 
                </h4>
              </div>
            </div>

            <div class="row contactContent">
              <div class="col-12">
                <h4>
                  Location: Québec City, Québec, Canada
                </h4>
              </div>
            </div>

            <div class="row contactContent">
              <div class="col-12">
                <h4>
                  Language: French or english
                </h4>
              </div>
            </div>

            <div class="row contactText">
              <div class="col-12 ">
                <p> Do not hesitate to contact me, it will be my pleasure to discuss with you about IT opportunities and more!</p>
              </div>
            </div>

          </div>

        </div>
      );
  };
  
  export default Contact;