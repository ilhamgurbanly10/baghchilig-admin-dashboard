import i18next from "i18next";
import header_de from "./de/header.json";
import header_en from "./en/header.json";
import header_az from "./az/header.json";
import body_de from "./de/body.json";
import body_en from "./en/body.json";
import body_az from "./az/body.json";
import common_de from "./de/common.json";
import common_en from "./en/common.json";
import common_az from "./az/common.json";

let defLan;
const locale = localStorage.getItem('locale');

if (locale) defLan = locale 
else { defLan = "az"; localStorage.setItem('locale', 'az'); }

i18next.init({
    whitelist: ['az', 'en', 'de'],
    interpolation: { escapeValue: false },  
    lng: defLan,                              
    resources: {
        en: {
            header: header_en,
            body: body_en, 
            common: common_en             
        },
        de: {
            header: header_de,
            body: body_de, 
            common: common_de
        },
        az: {
            header: header_az,
            body: body_az, 
            common: common_az
        }
    },
  });