// HomePage.jsx
import React, { useState } from "react";
import PlacesAutoComplete from "./PlacesAutoComplete";
import BarReview from "./BarReview";
import '../styles/HomePage.scss';

function HomePage() {
  const [selectedBar, setSelectedBar] = useState(null);

  const handleSelectBar = (barData) => {
    setSelectedBar(barData);
  };

  return (
    <div className="homepage-container">
      {!selectedBar && <PlacesAutoComplete onSelectBar={handleSelectBar} />}
      {selectedBar && <BarReview selectedBar={selectedBar} setSelectedBar={setSelectedBar} />}
    </div>
  );
}

export default HomePage;
