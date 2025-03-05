// src/i18n/utils.ts

export const languages = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return 'fr'; // Langue par défaut
}

export function useTranslations(lang: keyof typeof languages) {
  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.portfolio': 'Portfolio',
      'nav.blog': 'Blog',
      'nav.about': 'About',
    },
    fr: {
      'nav.home': 'Accueil',
      'nav.portfolio': 'Portfolio',
      'nav.blog': 'Blog',
      'nav.about': 'À propos',
    },
    es: {
      'nav.home': 'Inicio',
      'nav.portfolio': 'Portafolio',
      'nav.blog': 'Blog',
      'nav.about': 'Acerca de',
    },
  };

  return function t(key: keyof typeof translations[typeof lang]) {
    return translations[lang][key];
  };
}