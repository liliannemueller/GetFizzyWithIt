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
      <h2>Bar Name: {barDetails.name}</h2>
      <h4>{barDetails.city}, {barDetails.state}</h4>
      
      <div className="bar-container">
        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja3RhaWx8ZW58MHx8MHx8fDA%3D"></img>  
        <h4>Fizzy Rating:</h4>    
    </div>
    </div>
  );
}

export default Bar;
