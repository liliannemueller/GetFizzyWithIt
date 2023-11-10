import React from "react";
import './styles/App.scss';
import HomePage from "./components/HomePage";
// import PlacesAutocomplete from './components/PlacesAutoComplete.jsx';
function App() {
  return (
    <div className="App">
      <header className='App-header'>Is It Fizzy?</header>
      <div className='cocktail-container'>
        <img src={'https://images.unsplash.com/photo-1581927692308-be9e43b4d860?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvY2t0YWlsfGVufDB8fDB8fHww'} className="cocktail-img" alt="cocktail" />
       </div>
      <HomePage />
    </div>
  );
}

export default App;