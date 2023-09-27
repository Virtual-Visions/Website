import React, { createContext, useState, useEffect } from 'react';

// Erstellen Sie den LanguageContext
export const LanguageContext = createContext();

// Erstellen Sie den LanguageProvider
export const LanguageProvider = ({ children }) => {
  // Versuchen Sie, die ausgewählte Sprache aus dem Local Storage zu lesen
  const savedLanguage = localStorage.getItem('selectedLanguage');

  // Verwalten Sie den Sprachzustand
  const [language, setLanguage] = useState(savedLanguage || 'de'); // Verwenden Sie die gespeicherte Sprache oder standardmäßig 'de'

  // Methode zum Ändern der Sprache
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'de' ? 'en' : 'de')); // Wechseln zwischen Deutsch ('de') und Englisch ('en')
  };

  useEffect(() => {
    // Wenn die Sprache geändert wird, speichern Sie sie im Local Storage
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
