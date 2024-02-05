import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import translationEN from './locales/EnTranslation.json';
import translationZH from './locales/ZhTranslation.json';


const resources = {
    en:{
        translation: translationEN,
    },
    zh:{
        translation: translationZH,
    },
}
i18n.use(initReactI18next).init({
    resources,
    fallbackLng : "zh",
})