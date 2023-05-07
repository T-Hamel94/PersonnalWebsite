import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitch() {
    const { i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

  return (
    <div id="language">
        <button
            onClick={() => changeLanguage('en')}
            className={i18n.language === 'en' ? 'selectedLanguage' : ''}
        > EN</button>
        <span>/</span>
        <button
            onClick={() => changeLanguage('fr')}
            className={i18n.language === 'fr' ? 'selectedLanguage' : ''}
        >FR </button>
    </div>
  )
}

export default LanguageSwitch;
