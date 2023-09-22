import React, { useState } from "react";

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value=""> Select Language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fn">French</option>
        <option value="jp">Japanese</option>
        <option value="hd">Hindi</option>
        <option value="ar">Arabic</option>
        <option value="rs">Russian</option>
        <option value="kr">Korean</option>
        <option value="cz">Czech</option>
        <option value="du">Dutch</option>
        <option value="tu">Turkish</option>
        <option value="hu">Hungarian</option>
        <option value="ro">Romanian</option>
        <option value="be">Bengalia</option>
        <option value="est">Estonian</option>
        <option value="gr">German</option>
        <option value="it">Italian</option>
        <option value="po">Portuguese</option>
        <option value="pol">polish</option>
        <option value="tm">Tamil</option>
      </select>
    </div>
  );
};

export default LanguageSelection;
