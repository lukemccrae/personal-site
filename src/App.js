import React, { Component } from 'react';
import './App.css';
import Particles from './ParticleConfig.js';
import Name from './Name.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Name></Name>
          <div id="particles-wrapper">
            <Particles></Particles>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
