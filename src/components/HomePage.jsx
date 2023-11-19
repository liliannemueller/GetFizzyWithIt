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
        place_id: selectedBar.place_id,
        ratings: fizzyValue,
    }
    console.log("BarData:",data)
    //add bar info and rating to DB
    //first, check if the bar is already in the DB by the place_id
    

    fetch('/bars/add', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
            if (response.ok) {
                // Request successful
                console.log('Data submitted successfully');
            } else {
                // Request failed
                console.error('Failed to submit data');
            }
            })
            .catch(error => {
            // Error occurred during the request
            console.error('Error:', error);
            });
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
