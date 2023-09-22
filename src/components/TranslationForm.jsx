import React, { useState } from 'react';
import { getBaseUrl } from '../api/fetch';
import { getApiKey } from '../api/api';
import './translation.css'
const TranslationForm = () => {
  const [inputText, setInputText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const languageOptions = [
    { value: "", label: "Select Language" },
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "jp", label: "Japanese" },
    { value: "hd", label: "Hindi" },
    { value: "ar", label: "Arabic" },
    { value: "rs", label: "Russian" },
    { value: "kr", label: "Korean" },
    { value: "cz", label: "Czech" },
    { value: "du", label: "Dutch" },
    { value: "tu", label: "Turkish" },
    { value: "hu", label: "Hungarian" },
    { value: "ro", label: "Romanian" },
    { value: "be", label: "Bengali" },
    { value: "est", label: "Estonian" },
    { value: "gr", label: "German" },
    { value: "it", label: "Italian" },
    { value: "po", label: "Portuguese" },
    { value: "pol", label: "Polish" },
    { value: "tm", label: "Tamil" },

  ];

  const handleTranslate = () => {
    if (!sourceLanguage || !targetLanguage || !inputText) {
      alert('Please select source and target languages and provide input text.');
      return;
    }
  
    const translationUrl = getBaseUrl();
  
    const requestBody = {
      q: inputText,
      source: sourceLanguage,
      target: targetLanguage,
    };
  
    console.log('Translation Request:', {
      url: translationUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });
  
    fetch(translationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        console.log('Response Status:', response.status);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((translationData) => {
        console.log('Translation Data:', translationData);
        const translation = translationData.data.translations[0].translatedText;
        setTranslatedText(translation);
      })
      .catch((error) => console.error('Error translating:', error));
  };
  

  return (
    <div className='translation-form'>
      <h2>Translate Text</h2>
      <label htmlFor="sourceLanguage">Source Language:</label>
      <select
        id="sourceLanguage"
        value={sourceLanguage}
        onChange={(e) => setSourceLanguage(e.target.value)}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <label htmlFor="targetLanguage">Target Language:</label>
      <select
        id="targetLanguage"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <textarea
        rows={6}
        cols={40}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button onClick={handleTranslate}>Translate</button>

      <h3>Translation:</h3>
      <div className='translated-text'>{translatedText}</div>
    </div>
  );
};

export default TranslationForm;
