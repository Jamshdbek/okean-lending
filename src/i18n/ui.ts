export const languages = {
    uz: "O'zbekcha",
    en: 'English',
};

export const defaultLang = 'uz';

export const ui = {
    en: {
        'lab': "lablary",
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.twitter': 'Twitter',
        'home.info': "Make your project perfect and modern with easy and modern ui components."
    },
    uz: {
        'lab': "kutubxona",
        'nav.home': 'Komonentlar',
        'nav.about': 'Haqida',
        'home.info': "Oson va zamonaviy ui komponentlari bilan loyihangizni mukammal va zamonaviy qiling"
    },
} as const;

export function getLang(): keyof typeof ui {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as keyof typeof ui) || defaultLang;
    }
    return defaultLang;
  }