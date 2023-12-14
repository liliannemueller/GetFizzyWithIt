import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Bar( {barData} ) {
  const [averageRating, setAverageRating] = useState(null);
   const [barDetails, setBarDetails] = useState({
    name: "",
    city: "",
    state: "",
  });

   useEffect(() => {
    if (barData) {
      // Call extractName when barData changes
      extractName(barData.value);

      // Fetch ratings data for the bar
      fetch(`http://localhost:5000/bars/${barData.placeId}`)
        .then((response) => response.json())
        .then((data) => {
          // Calculate the average rating
          const ratingsArray = data.ratings || [];
          const sum = ratingsArray.reduce((acc, rating) => acc + rating, 0);
          const average = sum / (ratingsArray.length || 1);
          const roundedAverage = Number(average.toFixed(2))

          // Set the average rating
          setAverageRating(roundedAverage);
        })
        .catch((error) => {
          console.error("Error fetching ratings:", error);
        });
    }
  }, [barData]);

  function extractName(barData) {
      setBarDetails({
          name: barData.split(",")[0].trim(),
          city: barData.split(",")[2].trim(),
          state: barData.split(",")[3].trim(),
      })
       
  }
  

  return (
    <div>
      <h1>{barDetails.name}</h1>
      <h3>{barDetails.city}, {barDetails.state}</h3>
      <div className="bar-container">
        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja3RhaWx8ZW58MHx8MHx8fDA%3D"></img>  
        <h2>Fizzy Rating:{averageRating}</h2>    
    </div>
    </div>
  );
}

export default Bar;
