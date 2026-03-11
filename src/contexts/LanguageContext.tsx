import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'uz' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uz: {
    'app.name': 'ComplexCurve Converter',
    'app.subtitle': "Tekislikdagi egri chiziqlar tenglamalarini kompleks shaklga o'tkazuvchi aqlli platforma",
    'nav.home': 'Bosh sahifa',
    'nav.dashboard': 'Dashboard',
    'nav.converter': 'Konverter',
    'nav.history': 'Tarix',
    'nav.profile': 'Profil',
    'nav.admin': 'Admin Panel',
    'nav.login': 'Kirish',
    'nav.register': "Ro'yxatdan o'tish",
    'nav.logout': 'Chiqish',
    'auth.welcome': 'Xush kelibsiz',
    'auth.email': 'Email',
    'auth.password': 'Parol',
    'auth.fullName': 'Toʻliq ism',
    'auth.login': 'Kirish',
    'auth.register': "Ro'yxatdan o'tish",
    'converter.title': 'Tenglamani konvertatsiya qilish',
    'converter.input': 'Kartezian tenglamasi (x, y)',
    'converter.convert': 'Oʻtkazish',
    'converter.clear': 'Tozalash',
    'converter.example': 'Misollar',
    'converter.steps': 'Qadamlar',
    'converter.result': 'Natija',
    'converter.copy': 'Nusxalash',
    'converter.save': 'Saqlash',
    'dashboard.stats.total': 'Jami konvertatsiyalar',
    'dashboard.stats.recent': 'Oxirgi faollik',
    'dashboard.quick.new': 'Yangi konvertatsiya',
    'admin.users': 'Foydalanuvchilar',
    'admin.activity': 'Faollik jurnali',
    'admin.stats': 'Platforma statistikasi',
    'common.save': 'Saqlash',
    'common.cancel': 'Bekor qilish',
    'common.delete': "O'chirish",
    'common.edit': 'Tahrirlash',
    'common.search': 'Qidirish',
  },
  ru: {
    'app.name': 'ComplexCurve Converter',
    'app.subtitle': 'Интеллектуальная платформа для перевода уравнений плоских кривых в комплексную форму',
    'nav.home': 'Главная',
    'nav.dashboard': 'Дашборд',
    'nav.converter': 'Конвертер',
    'nav.history': 'История',
    'nav.profile': 'Профиль',
    'nav.admin': 'Админ панель',
    'nav.login': 'Вход',
    'nav.register': 'Регистрация',
    'nav.logout': 'Выход',
    'auth.welcome': 'Добро пожаловать',
    'auth.email': 'Email',
    'auth.password': 'Пароль',
    'auth.fullName': 'Полное имя',
    'auth.login': 'Войти',
    'auth.register': 'Зарегистрироваться',
    'converter.title': 'Конвертация уравнения',
    'converter.input': 'Декартово уравнение (x, y)',
    'converter.convert': 'Конвертировать',
    'converter.clear': 'Очистить',
    'converter.example': 'Примеры',
    'converter.steps': 'Шаги',
    'converter.result': 'Результат',
    'converter.copy': 'Копировать',
    'converter.save': 'Сохранить',
    'dashboard.stats.total': 'Всего конвертаций',
    'dashboard.stats.recent': 'Последняя активность',
    'dashboard.quick.new': 'Новая конвертация',
    'admin.users': 'Пользователи',
    'admin.activity': 'Журнал активности',
    'admin.stats': 'Статистика платформы',
    'common.save': 'Сохранить',
    'common.cancel': 'Отмена',
    'common.delete': 'Удалить',
    'common.edit': 'Редактировать',
    'common.search': 'Поиск',
  },
  en: {
    'app.name': 'ComplexCurve Converter',
    'app.subtitle': 'Intelligent platform for converting plane curve equations into complex form',
    'nav.home': 'Home',
    'nav.dashboard': 'Dashboard',
    'nav.converter': 'Converter',
    'nav.history': 'History',
    'nav.profile': 'Profile',
    'nav.admin': 'Admin Panel',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.logout': 'Logout',
    'auth.welcome': 'Welcome',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.fullName': 'Full Name',
    'auth.login': 'Login',
    'auth.register': 'Register',
    'converter.title': 'Equation Conversion',
    'converter.input': 'Cartesian Equation (x, y)',
    'converter.convert': 'Convert',
    'converter.clear': 'Clear',
    'converter.example': 'Examples',
    'converter.steps': 'Steps',
    'converter.result': 'Result',
    'converter.copy': 'Copy',
    'converter.save': 'Save',
    'dashboard.stats.total': 'Total Conversions',
    'dashboard.stats.recent': 'Recent Activity',
    'dashboard.quick.new': 'New Conversion',
    'admin.users': 'Users',
    'admin.activity': 'Activity Log',
    'admin.stats': 'Platform Statistics',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.search': 'Search',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang');
    return (saved as Language) || 'uz';
  });

  useEffect(() => {
    localStorage.setItem('app_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
