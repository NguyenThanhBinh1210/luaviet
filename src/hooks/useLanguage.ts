import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const LANGUAGE_KEY = 'app_language';

export const useLanguage = () => {
    const { i18n } = useTranslation();

    // Lấy ngôn ngữ từ localStorage khi component mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
        if (savedLanguage && i18n.languages.includes(savedLanguage)) {
            i18n.changeLanguage(savedLanguage);
        } else {
            // Nếu chưa có ngôn ngữ được lưu, set mặc định là tiếng Việt
            i18n.changeLanguage('vi');
            localStorage.setItem(LANGUAGE_KEY, 'vi');
        }
    }, [i18n]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem(LANGUAGE_KEY, lng);
    };

    return {
        currentLanguage: i18n.language,
        changeLanguage,
        isInitialized: i18n.isInitialized
    };
}; 