import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import PlacesAutoComplete from './PlacesAutoComplete'
import Bar from "./Bar";

function HomePage( {onSelectBar, barData} ) {
  const [selectedBar, setSelectedBar] = useState(null);

  const handleSelectBar = (barData) => {
    setSelectedBar(barData);
  };

  return (
    <div>
      <PlacesAutoComplete onSelectBar={handleSelectBar} />
      {selectedBar && <Bar barData={selectedBar} />}
    </div>
  );
}

export default HomePage;
