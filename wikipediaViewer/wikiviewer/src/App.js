import React, { Component } from 'react';
import './App.css';
import Searchbox from './components/Searchbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href='https://en.wikipedia.org/wiki/Special:Random' target='_blank'>
          Click here for a random article
        </a>
        <Searchbox />
      </div>
    );
  }
}

export default App;
