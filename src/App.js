import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/App.scss';
import HomePage from "./components/HomePage";
import Bar from "./components/Bar";
import BarReview from "./components/BarReview";
function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>Is It Fizzy?</header>
        <div className="app-body">
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/review" element={<BarReview />} />
        </Routes>
        </div>
         
      </div>
    </Router>
  );
}

export default App;