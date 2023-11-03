import i18n from 'i18next';
import ko from './langs/ko.js';
import en from './langs/en.js';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lang: 'ko',
});
