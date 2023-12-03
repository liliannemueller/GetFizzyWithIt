import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import PlacesAutoComplete from './PlacesAutoComplete'
import Bar from "./Bar";
import FizzyMeter from './FizzyMeter'

function HomePage( {onSelectBar, barData} ) {
  const [selectedBar, setSelectedBar] = useState(null);
  const [fizzyValue, setFizzyValue] = useState(0);

  const handleSelectBar = (barData) => {
    setSelectedBar(barData);
    console.log(`selectedBar in handleSelect: ${selectedBar}`)
    console.log(`barData in handleSelect: ${barData}`)
  };
  useEffect(() => {
  console.log(`selectedBar: ${selectedBar}`);
  }, [selectedBar]);

  const handleFizzyMeterChange = (event) => {
    setFizzyValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`fizzyValue: ${fizzyValue}`)
    
    //add logic to add fizzy rating to database
    const data = {
        name: selectedBar.value,  
        placeId: selectedBar.placeId,
        ratings: fizzyValue,
    }
    console.log("handlesubmit data:",data)
    fetch('http://localhost:5000/bars/add', {
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
