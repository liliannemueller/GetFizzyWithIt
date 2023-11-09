import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

function AutoCompleteSearch() {
  const [address, setAddress] = useState("");

  const handleSelect = (value, placeId) => {
    setAddress(value);
    // You can now use the selected value and placeId as needed.
    console.log("Selected Place:", value);
    console.log("Place ID:", placeId);
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
                placeholder: "Search for a place...",
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
