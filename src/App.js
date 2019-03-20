import React, { Component } from 'react';
import RouletteGun from './state-drills/RouletteGun';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouletteGun bulletInChamber={8} />
      </div>
    );
  }
}

export default App;
