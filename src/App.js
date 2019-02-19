import React, {Component} from 'react';
import './App.css';
import Particles from './ParticleConfig.js';
import Name from './Name.js';

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
        </header>
        <div className="App-head">
          
        </div>
        <div className="App-contact"></div>
      </div>
    );
  }
}

export default App;
