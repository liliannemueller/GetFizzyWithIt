import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import PlacesAutoComplete from './PlacesAutoComplete'
import Bar from "./Bar";
import FizzyMeter from './FizzyMeter'

function HomePage(  ) {
  const [selectedBar, setSelectedBar] = useState(null);
  const [isBarSelected, setIsBarSelected] = useState(false);
  const [isBarInDatabase, setIsBarInDatabase] = useState(false);
  const [fizzyValue, setFizzyValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectBar = (barData) => {
    setSelectedBar(barData);
    setIsBarSelected(true);
    console.log(`selectedBar in handleSelect: ${selectedBar}`)
    console.log(`barData in handleSelect: ${barData.value}`)
  };

  useEffect(() => {
    setIsLoading(true);

    if (selectedBar && selectedBar.placeId) {
      // Make fetch request to check if bar is in the database
      fetch(`http://localhost:5000/bars/${selectedBar.placeId}`)
        .then((response) => {
          if (response.ok) {
            setIsBarInDatabase(true);
          } else {
            setIsBarInDatabase(false);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [selectedBar]);

useEffect(() => {
  console.log(`isBarInDatabase: ${isBarInDatabase}`);
}, [isBarInDatabase]);

  const handleFizzyMeterChange = (event) => {
    setFizzyValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //add fizzy rating to database
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
      {!isBarSelected && (
        <PlacesAutoComplete onSelectBar={handleSelectBar} />
      )}
      {isBarSelected && (
        <div>
          {isBarInDatabase ? (
            // Render Bar component with average ratings
            <Bar barData={selectedBar} />
          ) : (
            // Render FizzyMeter component and submit button
            <div>
              <h1>You're the first to Review!</h1>
              <form onSubmit={handleSubmit}>
               <FizzyMeter value={fizzyValue} onChange={handleFizzyMeterChange} />
                <button type="submit">Submit Rating</button>
              </form>
            </div>
          )}
          <button onClick={() => setIsBarSelected(false)}>Back</button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
