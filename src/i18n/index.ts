import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import viTranslation from './locales/vi.json';
import zhTranslation from './locales/zh.json';
import idTranslation from './locales/id.json';

const resources = {
  vi: {
    translation: viTranslation
  },
  zh: {
    translation: zhTranslation
  },
  id: {
    translation: idTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('app_language') || 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 