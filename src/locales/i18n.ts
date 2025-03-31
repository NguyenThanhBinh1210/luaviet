import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'


import viTransition from './vi/translation.json'
import zhTransition from './zh/translation.json'
import idTransition from './id/translation.json'

const i18nOptions = {
    resources: {
        vi: {
            translations: viTransition
        },

        id: {
            translations: idTransition
        },
        zh: {
            translations: zhTransition
        },

    },
    lng: localStorage.getItem('app_language') || 'vi', // Lấy ngôn ngữ từ localStorage, nếu không có thì dùng 'vn'
    fallbackLng: 'vi',
    debug: false,
    ns: ['translations', 'errors', 'validations'],
    defaultNS: 'translations',
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    }
}

i18n.use(initReactI18next).init(i18nOptions)

export default i18n
