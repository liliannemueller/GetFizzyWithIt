import React from "react";
import { Link, useParams } from "react-router-dom";

function Bar( {barData} ) {
//   const { place_id } = useParams();
  // Fetch bar details using place_id

  return (
    <div>
      <h2>Bar Details</h2>
      <div>
      <h2>Bar Name: {barData.value}</h2>
      <p>Place ID: {barData.place_id}</p>
      {/* Add more details and ratings here */}
    </div>
      {/* <Link to="/">Back to Home</Link> */}
    </div>
  );
}

export default Bar;
