import React, { useState, useEffect } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

function AutoCompleteSearch({ onSelectBar }) {
  const [address, setAddress] = useState("");
  const [barDetails, setBarDetails] = useState(null);

  //  useEffect(() => {
  //   console.log("barDetails in UseEffect in AutoCompleteSearch:", barDetails);
  //  }, [barDetails]);


  const handleSelect = (value, placeId) => {
    setAddress(value);
    if (onSelectBar) {
      onSelectBar({ value, placeId });
    }
    extractName(value);
  };
  function extractName(description) {
      setBarDetails({
          name: description.split(",")[0].trim(),
          city: description.split(",")[2].trim(),
          state: description.split(",")[3].trim(),
      })  
  }
  useEffect(() => {
  console.log(`barDetails after name extraction in ACS: ${barDetails}`);
  }, [barDetails]);


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
