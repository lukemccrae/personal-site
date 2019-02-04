import React, {Component} from 'react';
import './App.css';
import Particles from './ParticleConfig.js';
import Name from './Name.js';
import Project from './Project.js';
import About from './About.js';
import Resume from './Resume.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Name></Name>
          <About></About>
          <Project></Project>
          <Resume></Resume>
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
