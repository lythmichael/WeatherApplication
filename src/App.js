import React from 'react';
import Nav from './components/Nav'
import './App.css'
import WeatherInformation from './components/WeatherInformation';
import WeatherDetails from './components/WeatherDetails';

function App() {
  return (
    <div className="App">
      <Nav />
      <WeatherInformation />
      <WeatherDetails />
    </div>
  );
}

export default App;
