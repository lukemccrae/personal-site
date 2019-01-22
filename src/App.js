import React, {Component} from 'react';
import './App.css';
import Particles from './ParticleConfig.js';
import Name from './Name.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Name></Name>
        </header>
        <div class="App-body">
          <div id="particles-wrapper">
            <Particles></Particles>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
