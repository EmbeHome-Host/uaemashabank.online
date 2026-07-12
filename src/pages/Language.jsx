import { useState } from 'react';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="language-dropdown">
      <select
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option className="text-white" value="en">English</option>
        <option className="text-white" value="es">Español</option>
        <option className="text-white" value="ar">العربية</option>
      </select>
    </div>
  );
};

export default Language;
