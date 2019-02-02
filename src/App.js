import React, {Component} from 'react';
import './App.css';
import Particles from './ParticleConfig.js';
import Name from './Name.js';
import Project from './Project.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Name></Name>
          <Project></Project>
        </header>
        <div className="App-head">
          <div id="particles-wrapper">
            <Particles></Particles>
          </div>
        </div>
        <div className="App-contact"></div>
      </div>
    );
  }
}

export default App;
