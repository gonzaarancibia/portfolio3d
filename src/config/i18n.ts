import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Load translations from JSON files
  .use(LanguageDetector) // Detect the language from pc or browser
  .use(initReactI18next)
  .init({
    fallbackLng: 'es', // Default language if user's language is not available
    interpolation: {
      escapeValue: false, // React already handles XSS protection
    },
    backend: {
      // Here is where i18n will get all translations
      loadPath: '/src/config/translations/{{lng}}/translation.json',
    },
  });

export default i18n;
