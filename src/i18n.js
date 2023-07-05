import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from "i18next-http-backend"
import LanguageDetector from 'i18next-browser-languagedetector';
import translation from "./locales/en/translation.json";


i18n.use(LanguageDetector).use(initReactI18next).use(Backend).init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
        escapeValue: false, // not needed for React as it escapes by default
    },
    react: {
        wait: true,
    },
    resources: {
        en: {
            translation: translation,
        },
    }
    });

export default i18n;