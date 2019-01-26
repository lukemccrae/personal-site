import React, {Component} from 'react';

class Name extends Component {
  render() {
    return (
      <div id="name-card">
        <h3>Luke McCrae</h3>
        <h2>Full Stack Developer</h2>
        <h4></h4>
        <div className="container-fluid">
          <div className="row">
            <div className="info-border col-md">
              <div className="button-wrapper">
                <button className="info-button">Projects</button>
              </div>
            </div>
            <div className="info-border col-md">
              <div className="button-wrapper">
                <button className="info-button">About</button>
              </div>
            </div>
            <div className="col-md info-border ">
              <div className="button-wrapper">
                <button className="info-button">Resume</button>
              </div>
            </div>
            <div className="info-border col-md">
              <div className="button-wrapper">
                <button className="info-button">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Name;
