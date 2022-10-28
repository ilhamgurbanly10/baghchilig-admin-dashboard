import i18next from "i18next";
import az from "./locales/az.json";
import de from "./locales/de.json";
import en from "./locales/en.json";

let defaultLocale = process.env.REACT_APP_I18N_LOCALE || "az";
const locale = localStorage.getItem('locale');

locale ? defaultLocale = locale : localStorage.setItem('locale', defaultLocale); 

i18next.init({
    interpolation: { escapeValue: false },  
    lng: defaultLocale, 
    fallbackLng: process.env.REACT_APP_I18N_FALLBACK_LOCALE || "az",                             
    resources: {
        en: { common: en },
        de: { common: de },
        az: { common: az }
    },
  });