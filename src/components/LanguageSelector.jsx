// LanguageSelector Component
import React from 'react';

const LanguageSelector = ({ languages, currentLanguage, onLanguageChange }) => {
  return (
    <select value={currentLanguage} onChange={(e) => onLanguageChange(e.target.value)}>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;