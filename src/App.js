import React from "react";
import './styles/App.scss';
import HomePage from "./components/HomePage";
function App() {
  return (
    <div className="App">
      <header className='App-header'>Is It Fizzy?</header>
      <div className="">
        <HomePage />
      </div>
    </div>
  );
}

export default App;