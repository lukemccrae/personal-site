import React, { Component } from 'react';
import './App.css';
import Particles from './ParticleConfig.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h3>Luke McCrae</h3>
            <h4>Full Stack Developer</h4>
          </div>
          <Particles></Particles>
        </header>
      </div>
    );
  }
}

export default App;
