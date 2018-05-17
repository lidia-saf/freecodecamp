import React, { Component } from 'react';
import './App.css';
import Geolocation from './components/Geolocation';


class App extends Component {
  render(props) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Free Code Camp</h1>
          <h2 className="App-title2">Weather App</h2>
        </header>
      <Geolocation />
      </div>
    );
  }
}

export default App;
