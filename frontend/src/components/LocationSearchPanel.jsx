//// filepath: /c:/Coding/Web/ProjectS/UBER/frontend/src/components/LocationSearchPanel.jsx
import React from 'react';

const LocationSearchPanel = ({ suggestions, activeField, setPickup, setDestination }) => {
  const handleSuggestionClick = (suggestion) => {
    const text = suggestion.description; // use description or appropriate field

    if (activeField === 'pickUp') {
      setPickup(text);
    } else if (activeField === 'destination') {
      setDestination(text);
    }
  };

  return (
    <div className='p-3 mt-5'>
      {suggestions.map((suggestion, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(suggestion)}
          className="flex gap-4 mt-2 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start"
        >
          
          <h4 className="font-medium">{suggestion.description}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;