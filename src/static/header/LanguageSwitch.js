import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitch() {
    const { i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

  return (
    <div id="language" class="child d-flex justify-content-center align-items-center">
        <button
            onClick={() => changeLanguage('en')}
            className = {i18n.language === 'en' ? 'custom-btn selectedLanguage' : 'custom-btn'}
        > EN </button>
        <span>/</span>
        <button
            onClick={() => changeLanguage('fr')}
            className = {i18n.language === 'fr' ? 'custom-btn selectedLanguage' : 'custom-btn'}
        > FR </button>
    </div>
  )
}

export default LanguageSwitch;
