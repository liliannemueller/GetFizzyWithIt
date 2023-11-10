import React from "react";
import { Link, useParams } from "react-router-dom";

function Bar( {barData} ) {
//   const { placeId } = useParams();
  // Fetch bar details using placeId

  return (
    <div>
      <h2>Bar Details</h2>
      <div>
      <h2>Bar Name: {barData.value}</h2>
      <p>Place ID: {barData.placeId}</p>
      {/* Add more details and ratings here */}
    </div>
      {/* <Link to="/">Back to Home</Link> */}
    </div>
  );
}

export default Bar;
