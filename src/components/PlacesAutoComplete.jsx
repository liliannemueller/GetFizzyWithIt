import React, { useState, useEffect } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

function AutoCompleteSearch({ onSelectBar }) {
  const [address, setAddress] = useState("");
  


  const handleSelect = (value, placeId) => {
    setAddress(value);
    if (onSelectBar) {
      onSelectBar({ value, placeId });
    }
    
  };
 


  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "What bar are you at?",
              })}
            />
            <div>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => (
                <div {...getSuggestionItemProps(suggestion)}>
                  {suggestion.description}
                </div>
              ))}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

export default AutoCompleteSearch;
