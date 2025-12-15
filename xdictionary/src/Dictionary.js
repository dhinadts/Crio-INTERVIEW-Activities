import React, { useState } from "react";

const Dictionary = () => {
  const [input, setInput] = useState("");
  const [definition, setDefinition] = useState("");

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleChange = (e) => {
    setInput(e.target.value);
    setDefinition("");
  };

  const handleSubmit = () => {
    const found = dictionary.find(item => item.word.toLowerCase() === input.trim().toLowerCase());
    if (found) {
      setDefinition(found.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          value={input}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>Search</button>
      </div>
      <h3>Definition:</h3>
      <p>{definition}</p>
    </div>
  );
};

export default Dictionary;
