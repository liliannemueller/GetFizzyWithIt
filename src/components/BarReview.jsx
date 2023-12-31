import React, { useState, useEffect } from "react";
import Bar from "./Bar";
import FizzyMeter from "./FizzyMeter";
import "../styles/BarReview.scss"

function BarReview({ selectedBar, setSelectedBar }) {
  const [fizzyValue, setFizzyValue] = useState(0);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [isBarInDatabase, setIsBarInDatabase] = useState(false);

  const handleFizzyMeterChange = (event) => {
    setFizzyValue(event.target.value);
  };

   useEffect(() => {
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
          console.log(`isBarInDatabase: ${isBarInDatabase}`);
        });
    }
  }, [selectedBar]);

useEffect(() => {
  console.log(`isBarInDatabase: ${isBarInDatabase}`);
}, [isBarInDatabase]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add fizzy rating to the database 

    const data = {
    name: selectedBar.value,
    placeId: selectedBar.placeId,
    ratings: fizzyValue,
  };

  //add fizzy rating to DB
  fetch('http://localhost:5000/bars/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        // Request successful
        console.log('Data submitted successfully');
        setReviewSubmitted(true);
      } else {
        // Request failed
        console.error('Failed to submit data');
      }
    })
    .catch((error) => {
      // Error occurred during the request
      console.error('Error:', error);
    });

  // Reset the fizzy value
//   setFizzyValue(0);
};

  const handleBack = () => {
    setFizzyValue(0);
    setReviewSubmitted(false);
    // setIsBarInDatabase(false);
    // setSelectedBar(null);
  };
  const backToSearch = () => {
    setFizzyValue(0);
    setReviewSubmitted(false);
    setIsBarInDatabase(false);
    setSelectedBar(null);
  }

  return (
   <div>
      {!reviewSubmitted && <Bar barData={selectedBar} />}
      {!reviewSubmitted ? (
        <div>
          <h1>{isBarInDatabase ? "Review this bar!" : "You're the first to review!"}</h1>
          <form onSubmit={handleSubmit}>
            <FizzyMeter value={fizzyValue} onChange={handleFizzyMeterChange} />
            <button type="submit">Submit Rating</button>
          </form>
          <button className="back-button" onClick={backToSearch}>Back to Search</button>
        </div>
      ) : (
        <div>
          <h2 className="message">Thanks for your review!</h2>
          <p className="user-rating">Your Fizzy Rating: {fizzyValue}</p>
          <button className="back-button" onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
}

export default BarReview;