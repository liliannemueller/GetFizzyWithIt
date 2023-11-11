import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import PlacesAutoComplete from './PlacesAutoComplete'
import Bar from "./Bar";
import FizzyMeter from './FizzyMeter'

function HomePage( {onSelectBar, barData} ) {
  const [selectedBar, setSelectedBar] = useState(null);
  const [fizzyValue, setFizzyValue] = useState(0);

  const handleSelectBar = (barData) => {
    setSelectedBar(barData);
  };
  const handleFizzyMeterChange = (event) => {
    setFizzyValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fizzyValue)
    //add logic to add fizzy rating to database
    const data = {
        name: selectedBar.value,  
        place_id: selectedBar.placeId,
        fizzyRating: fizzyValue,
    }
    console.log("BarDATA:",data)
    setFizzyValue(0);
  };

  return (
    <div>
      <PlacesAutoComplete onSelectBar={handleSelectBar} />
      {selectedBar && (
      <div>
        <Bar barData={selectedBar} />
        <form onSubmit={handleSubmit}>
                <FizzyMeter value={fizzyValue} onChange={handleFizzyMeterChange} />
                <button type="submit">Submit Rating</button>
        </form>
      </div>
    )}
    </div>
  );
}

export default HomePage;
